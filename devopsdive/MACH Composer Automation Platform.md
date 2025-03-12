# MACH Composer Automation Platform

## Project Overview

### Situation
- Robert Bosch GmbH faced challenges with their legacy e-Commerce platform:
  - Monolithic architecture limiting flexibility and innovation
  - Slow release cycles (3-4 weeks between deployments)
  - Manual deployment processes prone to human error
  - Limited environment parity causing deployment issues
  - Configuration drift between environments
  - Difficulties integrating new microservices
  - Complex cross-team development workflows

```mermaid
graph TD
    A[Challenges] --> B[Monolithic Architecture]
    A --> C[Slow Release Cycles]
    A --> D[Manual Deployments]
    A --> E[Environment Issues]
    A --> F[Configuration Drift]
    B --> G[Limited Innovation]
    C --> H[Delayed Time-to-Market]
    D --> I[Deployment Errors]
```

### Task
Implement a modern MACH (Microservices, API-first, Cloud-native, Headless) deployment platform:
- Design and implement microservices deployment automation using MACH Composer
- Create standardized GitHub Actions workflows for CI/CD
- Establish environment-specific configuration management
- Configure automated testing integration
- Set up robust deployment verification
- Enable seamless integration with Commercetools
- Implement cross-team collaboration solutions

### Action

#### 1. Architecture Design

```mermaid
graph TB
    subgraph "Source Control"
    A[GitHub Repositories] --> B[MACH Composer Config]
    end
    
    subgraph "CI/CD Pipeline"
    B --> C[GitHub Actions]
    C --> D[Automated Tests]
    D --> E[Artifact Creation]
    E --> F[Deployment]
    end
    
    subgraph "Deployment Targets"
    F --> G[Development]
    F --> H[Staging]
    F --> I[Production]
    end
    
    subgraph "MACH Components"
    J[Frontend App] --> K[API Gateway]
    K --> L[Microservices]
    L --> M[Commercetools]
    end
```

#### 2. MACH Composer Implementation

```yaml
# mach-composer.yaml
version: '1.0'
components:
  - name: api-gateway
    source: github.com/bosch/api-gateway
    version: 1.2.0
  - name: product-service
    source: github.com/bosch/product-service
    version: 0.9.0
  - name: cart-service
    source: github.com/bosch/cart-service
    version: 1.0.0
  - name: checkout-service
    source: github.com/bosch/checkout-service
    version: 0.8.5
  - name: user-service
    source: github.com/bosch/user-service
    version: 1.1.0

sites:
  - identifier: bosch-ecommerce
    name: Bosch E-Commerce Platform
    domains:
      - shop.bosch.com
    environments:
      - name: development
        components:
          - name: api-gateway
            variables:
              LOG_LEVEL: debug
              API_KEY: ${CT_API_KEY_DEV}
          - name: product-service
            variables:
              CT_PROJECT_KEY: bosch-dev
              CT_CLIENT_ID: ${CT_CLIENT_ID_DEV}
              CT_CLIENT_SECRET: ${CT_CLIENT_SECRET_DEV}
              
      - name: staging
        components:
          - name: api-gateway
            variables:
              LOG_LEVEL: info
              API_KEY: ${CT_API_KEY_STAGING}
          - name: product-service
            variables:
              CT_PROJECT_KEY: bosch-staging
              CT_CLIENT_ID: ${CT_CLIENT_ID_STAGING}
              CT_CLIENT_SECRET: ${CT_CLIENT_SECRET_STAGING}
              
      - name: production
        components:
          - name: api-gateway
            variables:
              LOG_LEVEL: warning
              API_KEY: ${CT_API_KEY_PROD}
          - name: product-service
            variables:
              CT_PROJECT_KEY: bosch-prod
              CT_CLIENT_ID: ${CT_CLIENT_ID_PROD}
              CT_CLIENT_SECRET: ${CT_CLIENT_SECRET_PROD}
```

#### 3. GitHub Actions Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy MACH Application

on:
  push:
    branches:
      - main
      - develop
  pull_request:
    branches:
      - main
      - develop

jobs:
  validate:
    name: Validate MACH Configuration
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Set up MACH Composer
        uses: mach-composer/setup-action@v1
        with:
          version: '0.8.0'
      
      - name: Validate Configuration
        run: mach-composer validate -c mach-composer.yaml

  plan:
    name: Generate Deployment Plan
    needs: validate
    runs-on: ubuntu-latest
    env:
      CT_API_KEY_DEV: ${{ secrets.CT_API_KEY_DEV }}
      CT_CLIENT_ID_DEV: ${{ secrets.CT_CLIENT_ID_DEV }}
      CT_CLIENT_SECRET_DEV: ${{ secrets.CT_CLIENT_SECRET_DEV }}
      CT_API_KEY_STAGING: ${{ secrets.CT_API_KEY_STAGING }}
      CT_CLIENT_ID_STAGING: ${{ secrets.CT_CLIENT_ID_STAGING }}
      CT_CLIENT_SECRET_STAGING: ${{ secrets.CT_CLIENT_SECRET_STAGING }}
      CT_API_KEY_PROD: ${{ secrets.CT_API_KEY_PROD }}
      CT_CLIENT_ID_PROD: ${{ secrets.CT_CLIENT_ID_PROD }}
      CT_CLIENT_SECRET_PROD: ${{ secrets.CT_CLIENT_SECRET_PROD }}
    steps:
      - uses: actions/checkout@v2
      
      - name: Set up MACH Composer
        uses: mach-composer/setup-action@v1
        with:
          version: '0.8.0'
      
      - name: Generate Plan
        run: |
          if [[ $GITHUB_REF == 'refs/heads/main' ]]; then
            ENV="production"
          elif [[ $GITHUB_REF == 'refs/heads/develop' ]]; then
            ENV="staging"
          else
            ENV="development"
          fi
          
          mach-composer plan -c mach-composer.yaml -e $ENV -o plan.json
      
      - name: Upload Plan
        uses: actions/upload-artifact@v2
        with:
          name: deployment-plan
          path: plan.json

  test:
    name: Run Integration Tests
    needs: validate
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'
      
      - name: Install Dependencies
        run: npm ci
      
      - name: Run Tests
        run: npm run test:integration

  deploy:
    name: Deploy MACH Components
    needs: [plan, test]
    runs-on: ubuntu-latest
    if: github.event_name == 'push'
    env:
      CT_API_KEY_DEV: ${{ secrets.CT_API_KEY_DEV }}
      CT_CLIENT_ID_DEV: ${{ secrets.CT_CLIENT_ID_DEV }}
      CT_CLIENT_SECRET_DEV: ${{ secrets.CT_CLIENT_SECRET_DEV }}
      CT_API_KEY_STAGING: ${{ secrets.CT_API_KEY_STAGING }}
      CT_CLIENT_ID_STAGING: ${{ secrets.CT_CLIENT_ID_STAGING }}
      CT_CLIENT_SECRET_STAGING: ${{ secrets.CT_CLIENT_SECRET_STAGING }}
      CT_API_KEY_PROD: ${{ secrets.CT_API_KEY_PROD }}
      CT_CLIENT_ID_PROD: ${{ secrets.CT_CLIENT_ID_PROD }}
      CT_CLIENT_SECRET_PROD: ${{ secrets.CT_CLIENT_SECRET_PROD }}
    steps:
      - uses: actions/checkout@v2
      
      - name: Set up MACH Composer
        uses: mach-composer/setup-action@v1
        with:
          version: '0.8.0'
      
      - name: Download Plan
        uses: actions/download-artifact@v2
        with:
          name: deployment-plan
      
      - name: Deploy
        run: |
          if [[ $GITHUB_REF == 'refs/heads/main' ]]; then
            ENV="production"
          elif [[ $GITHUB_REF == 'refs/heads/develop' ]]; then
            ENV="staging"
          else
            ENV="development"
          fi
          
          mach-composer apply -c mach-composer.yaml -e $ENV --plan plan.json
      
      - name: Verify Deployment
        run: |
          # Custom verification script
          ./scripts/verify-deployment.sh $ENV

  notify:
    name: Send Deployment Notification
    needs: deploy
    runs-on: ubuntu-latest
    steps:
      - name: Send Notification
        uses: 8398a7/action-slack@v3
        with:
          status: ${{ job.status }}
          fields: repo,message,commit,author,action,eventName,ref,workflow
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
        if: always()
```

#### 4. Cross-Team Collaboration Setup

```bash
# Set up GitLab-BitBucket mirroring for cross-team collaboration
# This script configures bidirectional mirroring between GitLab and BitBucket

#!/bin/bash

# Configuration
GITLAB_TOKEN="your-gitlab-token"
BITBUCKET_USERNAME="your-bitbucket-username"
BITBUCKET_APP_PASSWORD="your-bitbucket-app-password"
GITLAB_GROUP="bosch"
BITBUCKET_PROJECT="BOSCH"

# Fetch repositories from GitLab
GITLAB_REPOS=$(curl -s --header "PRIVATE-TOKEN: $GITLAB_TOKEN" "https://gitlab.com/api/v4/groups/$GITLAB_GROUP/projects?per_page=100" | jq -r '.[].path')

for repo in $GITLAB_REPOS; do
  echo "Setting up mirroring for $repo"
  
  # Create repository in BitBucket if it doesn't exist
  curl -s -X POST -u "$BITBUCKET_USERNAME:$BITBUCKET_APP_PASSWORD" \
       -H "Content-Type: application/json" \
       "https://api.bitbucket.org/2.0/repositories/$BITBUCKET_PROJECT/$repo" \
       -d '{"scm": "git", "is_private": true}' \
       > /dev/null
  
  # Set up GitLab to BitBucket mirroring
  GITLAB_REPO_ID=$(curl -s --header "PRIVATE-TOKEN: $GITLAB_TOKEN" "https://gitlab.com/api/v4/groups/$GITLAB_GROUP/projects?search=$repo" | jq -r '.[0].id')
  
  curl -s --request POST --header "PRIVATE-TOKEN: $GITLAB_TOKEN" \
       "https://gitlab.com/api/v4/projects/$GITLAB_REPO_ID/remote_mirrors" \
       --data "url=https://$BITBUCKET_USERNAME:$BITBUCKET_APP_PASSWORD@bitbucket.org/$BITBUCKET_PROJECT/$repo.git&enabled=true&only_protected_branches=false" \
       > /dev/null
  
  echo "Mirroring configured for $repo"
done

echo "Cross-team repository mirroring setup complete"
```

### Results

#### Performance Metrics
| Metric | Before | After |
|--------|---------|--------|
| Deployment Frequency | Every 3-4 weeks | 2-3 times per week |
| Deployment Time | 3-4 hours | 15-25 minutes |
| Deployment Success Rate | ~80% | 96% |
| Configuration Consistency | Variable | 100% |
| Time to Market for New Features | 4-6 weeks | 1-2 weeks |
| Cross-Team Collaboration Efficiency | Limited | Significantly improved |

```mermaid
graph LR
    subgraph "Before: Monolithic Deployment"
    A[Single Codebase] --> B[Manual Build]
    B --> C[Manual Testing]
    C --> D[Manual Deployment]
    end
    
    subgraph "After: MACH Architecture"
    E[Multiple Microservices] --> F[MACH Composer]
    F --> G[Automated CI/CD]
    G --> H[Multiple Environments]
    H --> I[Continuous Feedback]
    I --> E
    end
```

## Technical Details

### Components Overview
1. **MACH Composer**
   - Central configuration management
   - Component versioning
   - Environment-specific configurations
   - Infrastructure provisioning integration

2. **GitHub Actions Workflow**
   - Standardized CI/CD pipelines
   - Automated testing integration
   - Deployment verification
   - Notification system

3. **Commercetools Integration**
   - API-first commerce platform
   - Environment-specific projects
   - Secure credential management
   - Data synchronization

4. **Cross-Team Collaboration**
   - GitLab-BitBucket repository mirroring
   - Shared component libraries
   - Standardized interfaces
   - Unified access control

### Environment-Specific Configuration Management
```yaml
# Example environment configuration pattern
environments:
  development:
    variables:
      BASE_URL: https://dev.bosch-ecommerce.com
      LOGGING_LEVEL: debug
      FEATURE_FLAGS: '{"newCheckout": true, "recommendations": true}'
    
  staging:
    variables:
      BASE_URL: https://staging.bosch-ecommerce.com
      LOGGING_LEVEL: info
      FEATURE_FLAGS: '{"newCheckout": true, "recommendations": true}'
    
  production:
    variables:
      BASE_URL: https://shop.bosch.com
      LOGGING_LEVEL: warning
      FEATURE_FLAGS: '{"newCheckout": false, "recommendations": true}'
```

### Reusable Workflow Templates
```yaml
# Reusable workflow for MACH microservice deployment
# .github/workflows/reusable-mach-deploy.yml
name: Reusable MACH Deployment

on:
  workflow_call:
    inputs:
      environment:
        required: true
        type: string
    secrets:
      CT_CLIENT_ID:
        required: true
      CT_CLIENT_SECRET:
        required: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: ${{ inputs.environment }}
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'
      
      - name: Install Dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Run Tests
        run: npm test
      
      - name: Deploy
        run: npx mach-composer deploy
        env:
          CT_CLIENT_ID: ${{ secrets.CT_CLIENT_ID }}
          CT_CLIENT_SECRET: ${{ secrets.CT_CLIENT_SECRET }}
          ENVIRONMENT: ${{ inputs.environment }}
```

### Automated Testing Framework
```javascript
// integration-tests/commercetools.test.js
const { createClient } = require('@commercetools/sdk-client');
const { createAuthMiddlewareForClientCredentialsFlow } = require('@commercetools/sdk-middleware-auth');
const { createHttpMiddleware } = require('@commercetools/sdk-middleware-http');
const { createRequestBuilder } = require('@commercetools/api-request-builder');

// Create client
const client = createClient({
  middlewares: [
    createAuthMiddlewareForClientCredentialsFlow({
      host: process.env.CT_AUTH_URL,
      projectKey: process.env.CT_PROJECT_KEY,
      credentials: {
        clientId: process.env.CT_CLIENT_ID,
        clientSecret: process.env.CT_CLIENT_SECRET,
      },
    }),
    createHttpMiddleware({
      host: process.env.CT_API_URL,
    }),
  ],
});

// Create request builder
const projectKey = process.env.CT_PROJECT_KEY;
const requestBuilder = createRequestBuilder({ projectKey });

describe('Commercetools Integration', () => {
  test('can fetch products', async () => {
    const uri = requestBuilder.products.build();
    
    const result = await client.execute({
      uri,
      method: 'GET',
    });
    
    expect(result.statusCode).toBe(200);
    expect(result.body.results.length).toBeGreaterThan(0);
  });
  
  test('can fetch categories', async () => {
    const uri = requestBuilder.categories.build();
    
    const result = await client.execute({
      uri,
      method: 'GET',
    });
    
    expect(result.statusCode).toBe(200);
    expect(result.body.results.length).toBeGreaterThan(0);
  });
});
```

### Kubernetes Ingress Whitelisting Configuration
```yaml
# k8s/ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-gateway
  annotations:
    kubernetes.io/ingress.class: "nginx"
    nginx.ingress.kubernetes.io/whitelist-source-range: "213.91.124.0/24,197.189.221.0/24,62.47.132.0/24"
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
spec:
  tls:
  - hosts:
    - api.bosch-ecommerce.com
    secretName: api-bosch-tls
  rules:
  - host: api.bosch-ecommerce.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: api-gateway
            port:
              number: 80
```

### Git Repository Structure
```
bosch-ecommerce/
├── .github/
│   └── workflows/
│       ├── deploy.yml
│       ├── reusable-mach-deploy.yml
│       └── integration-tests.yml
├── mach-composer.yaml
├── environments/
│   ├── development.yaml
│   ├── staging.yaml
│   └── production.yaml
├── components/
│   ├── api-gateway/
│   │   └── config.yaml
│   ├── product-service/
│   │   └── config.yaml
│   └── ...
├── scripts/
│   ├── setup-mirroring.sh
│   └── verify-deployment.sh
└── README.md
```

### Lessons Learned
1. Start with small, well-defined microservices
2. Invest time in creating reusable workflow templates
3. Implement comprehensive testing before automation
4. Document interface contracts between services
5. Establish clear ownership for shared components
6. Create consistent development environments across teams