import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Particle from "../Particle";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

// Импортируем все статьи статически для каждого языка
import fedUpEn from "../../content/blog/fed-up/en.md?raw";
import fedUpRu from "../../content/blog/fed-up/ru.md?raw";
import fedUpUa from "../../content/blog/fed-up/ua.md?raw";

import notAboutToolsEn from "../../content/blog/not-about-tools/en.md?raw";
import notAboutToolsRu from "../../content/blog/not-about-tools/ru.md?raw";
import notAboutToolsUa from "../../content/blog/not-about-tools/ua.md?raw";

import burnoutBalanceEn from "../../content/blog/burnout-balance/en.md?raw";
import burnoutBalanceRu from "../../content/blog/burnout-balance/ru.md?raw";
import burnoutBalanceUa from "../../content/blog/burnout-balance/ua.md?raw";

// Сопоставление id статьи и ее контента по языкам
const allBlogContent = {
  "fed-up": {
    en: fedUpEn,
    ru: fedUpRu,
    ua: fedUpUa,
  },
  "not-about-tools": {
    en: notAboutToolsEn,
    ru: notAboutToolsRu,
    ua: notAboutToolsUa,
  },
  "burnout-balance": {
    en: burnoutBalanceEn,
    ru: burnoutBalanceRu,
    ua: burnoutBalanceUa,
  },
};

// Список id статей
const BLOG_IDS = Object.keys(allBlogContent);

// Список поддерживаемых языков
const SUPPORTED_LANGS = ["en", "ru", "ua"];

// Функция для парсинга markdown
function parseMarkdown(md, id) {
  const { data, content } = matter(md);
  return {
    id,
    ...data,
    content,
  };
}

function Blog() {
  const { t, i18n } = useTranslation();
  const lang = SUPPORTED_LANGS.includes(i18n.language) ? i18n.language : "en";
  const [posts, setPosts] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const loadedPosts = BLOG_IDS.map(id => {
      // Используем текущий язык, если нет — fallback на английский
      const content = allBlogContent[id][lang] || allBlogContent[id]["en"];
      return parseMarkdown(content, id);
    });

    setPosts(loadedPosts);
    setSelectedId(loadedPosts[0]?.id || null);
    setLoading(false);
  }, [lang]);

  const selectedPost = posts.find((p) => p.id === selectedId) || posts[0];

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <Row>
          <Col md={12} className="blog-header">
            <h1 className="blog-title">
              <span className="purple">{t("blog.title")}</span>
            </h1>
            <p className="blog-subtitle">{t("blog.subtitle")}</p>
          </Col>
        </Row>
        {loading ? (
          <div style={{ textAlign: "center", padding: 60 }}>
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Row className="blog-content">
            <Col md={4} className="blog-posts">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  className={`blog-post-card${post.id === selectedPost?.id ? " selected" : ""}`}
                  onClick={() => setSelectedId(post.id)}
                  style={{ cursor: "pointer", marginBottom: 20 }}
                >
                  <Card.Body>
                    <Card.Title className="post-title">{post.title}</Card.Title>
                    <div className="post-meta">
                      <span className="post-date">{post.date}</span>
                      <span className="post-read-time">{post.readTime}</span>
                    </div>
                    <div className="post-tags">
                      {post.tags && post.tags.map((tag, idx) => (
                        <span key={idx} className="post-tag">{tag}</span>
                      ))}
                    </div>
                    <Card.Text className="post-excerpt">
                      {post.preview}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Col>
            <Col md={8} className="blog-full-post">
              {selectedPost && (
                <>
                  <h2 className="post-title">{selectedPost.title}</h2>
                  <div className="post-meta">
                    <span className="post-date">{selectedPost.date}</span>
                    <span className="post-read-time">{selectedPost.readTime}</span>
                  </div>
                  <div className="post-tags">
                    {selectedPost.tags && selectedPost.tags.map((tag, idx) => (
                      <span key={idx} className="post-tag">{tag}</span>
                    ))}
                  </div>
                  <ReactMarkdown className="post-content">
                    {selectedPost.content}
                  </ReactMarkdown>
                </>
              )}
            </Col>
          </Row>
        )}
      </Container>
    </Container>
  );
}

export default Blog; 