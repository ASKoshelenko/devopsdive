import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Particle from "../Particle";
// import ReactMarkdown from "react-markdown";

const blogPosts = {
  en: {
    title: "FED UP — WHO AM I IF NOT DEVOPS?",
    date: "2024-03-20",
    tags: ["DevOps", "Career", "Personal"],
    readTime: "5 min read",
    content: `This is not a post for likes.
It's a post from the heart. For those who value real engineers over perfect resumes.

I've been in IT since 2016. Started as a system administrator. Did EVERYTHING: setup, monitoring, infrastructure maintenance. Alone. There wasn't even a fancy term like "DevOps" back then — but I was already living that mindset.

Then I moved into web development. Why not try? Built CRM systems, business tools, internal systems. Again — from scratch, no templates. Because real business problems don't follow templates.

Then came full-on DevOps. Cloud, automation, CI/CD, IaC…
Now? I'm running DevOps at Bosch. Leading the technical direction from the EPAM side. Azure, KQL, Helm, Terraform — all on me.

And what do I hear on the market?

"Weak AWS?"
"Your Kubernetes isn't at architect level?"
"Python? Not backend-grade?"

Are you serious? Do I need 10 years of experience in each tool to prove I can solve real problems?

⸻

What I actually deliver:
 • Built a full monitoring system in KQL for a live product
 • Integrated Azure OpenAI at Bosch — not for hype, but for solving team needs
 • Created a CRM for a pharmaceutical company — solo, no architect
 • Designed CI/CD pipelines that saved the team 70% of their time
 • Running and owning production infrastructure solo

But all I hear is:

"Your Python isn't backend enough"
"AWS not deep enough"
"Kubernetes not done from scratch"

Seriously?

⸻

My growth areas? I'll be honest:
 • Kubernetes: operational level, not architect-level (but you rarely need to build from scratch)
 • AWS: basic right now, working with Lambda and IAM though
 • Python: mostly scripting
 • Kafka: familiar, not used in production
 • ECS / API Gateway: seen, not built myself

⸻

English? B1+ officially, but I work in English daily.

I talk with teams from Germany, India, Portugal every day. They understand me. That's what matters.
I'm not doing stand-up comedy in English — I'm delivering working PoCs.

⸻

DevOps is NOT a checklist.

It's thinking.
It's responsibility.
It's delivery.
It's ME.
 • I don't just read about Helm — I write the charts
 • I don't study CI/CD — I build the pipelines
 • I don't "learn" KQL — I use it to monitor live prod
 • I don't dream of leadership — I lead, alone, in production

⸻

And let's be real for a second:

I'm a displaced person.
Lost my home. Backpack on my shoulders. Air raid sirens overhead.
But I have my skills. My brain. My will to move forward.

I'm not perfect. But I'm real.

And there are MANY like me. Not perfect. But real.
People who take responsibility, solve pain points, and aren't afraid to say:

"I don't know. But I'll figure it out."

Thank you to the recruiters and hiring managers who look beyond checkboxes.
Who see potential, not just buzzwords.
Who can spot a diamond, even if it doesn't shine with a certificate (yet).

So...
Who am I?`
  },
  ru: {
    title: "ДОСТАЛО — КТО Я, ЕСЛИ НЕ DEVOPS?",
    date: "2024-03-20",
    tags: ["DevOps", "Карьера", "Личное"],
    readTime: "5 мин чтения",
    content: `Это не пост для лайков.
Это пост от сердца. Для тех, кто ценит настоящих инженеров больше, чем идеальные резюме.

Я в IT с 2016 года. Начал как системный администратор. Делал ВСЁ: настройка, мониторинг, обслуживание инфраструктуры. Один. Тогда даже не было такого модного термина как "DevOps" — но я уже жил этим мышлением.

Затем перешел в веб-разработку. Почему бы и нет? Строил CRM-системы, бизнес-инструменты, внутренние системы. Снова — с нуля, без шаблонов. Потому что реальные бизнес-проблемы не следуют шаблонам.

Затем пришел полноценный DevOps. Облако, автоматизация, CI/CD, IaC...
Сейчас? Я руковожу DevOps в Bosch. Веду техническое направление со стороны EPAM. Azure, KQL, Helm, Terraform — всё на мне.

И что я слышу на рынке?

«Слабый AWS?»
«Kubernetes не на уровне архитектора?»
«Python? Не бэкендовый?»

Серьёзно? Мне нужно по 10 лет опыта в каждом инструменте, чтобы доказать, что я решаю реальные задачи?

⸻

Что я реально делаю:
 • Построил систему мониторинга на KQL для живого продукта
 • Интегрировал Azure OpenAI в Bosch — не ради хайпа, а для нужд команды
 • Создал CRM для фармкомпании — один, без архитектора
 • Спроектировал CI/CD пайплайны, которые сэкономили команде 70% времени
 • Веду и поддерживаю продовую инфраструктуру в одиночку

Но слышу только:

«Python не бэкендовый»
«AWS не глубоко»
«Kubernetes не с нуля»

Серьёзно?

⸻

Зоны роста? Честно:
 • Kubernetes: операционный уровень, не архитектор (но редко нужно строить с нуля)
 • AWS: базовый сейчас, работаю с Lambda и IAM
 • Python: в основном скрипты
 • Kafka: знаком, не использовал в проде
 • ECS / API Gateway: видел, не строил сам

⸻

Английский? Официально B1+, но работаю на нём каждый день.

Общаюсь с командами из Германии, Индии, Португалии. Меня понимают. Это главное.
Я не стендап-комик на английском — я делаю рабочие PoC.

⸻

DevOps — это НЕ чеклист.

Это мышление.
Это ответственность.
Это результат.
Это Я.
 • Я не просто читаю про Helm — я пишу чарты
 • Я не учу CI/CD — я строю пайплайны
 • Я не "учу" KQL — я мониторю прод
 • Я не мечтаю о лидерстве — я веду, один, в проде

⸻

И давай честно:

Я вынужденный переселенец.
Потерял дом. Рюкзак за плечами. Сирены над головою.
Но у меня есть мозги, скиллы и воля идти дальше.

Я не идеален. Но я настоящий.

И таких, как я, МНОГО. Не идеальных. Но настоящих.
Тех, кто берёт ответственность, решает боль, не боится сказать:

«Я не знаю. Но разберусь».

Спасибо рекрутерам и нанимающим, кто смотрит глубже чекбоксов.
Кто видит потенциал, а не только модные слова.
Кто может разглядеть алмаз, даже если он пока не блестит сертификатом.

Так кто я?`
  },
  ua: {
    title: "ДОСИТЬ — ХТО Я, ЯКЩО НЕ DEVOPS?",
    date: "2024-03-20",
    tags: ["DevOps", "Кар'єра", "Особисте"],
    readTime: "5 хв читання",
    content: `Це не пост для лайків.
Це пост від серця. Для тих, хто цінує справжніх інженерів більше, ніж ідеальні резюме.

Я в IT з 2016 року. Почав як системний адміністратор. Робив ВСЕ: налаштування, моніторинг, обслуговування інфраструктури. Один. Тоді навіть не було такого модного терміну як "DevOps" — але я вже жив цим мисленням.

Потім перейшов у веб-розробку. Чому б і ні? Будував CRM-системи, бізнес-інструменти, внутрішні системи. Знову — з нуля, без шаблонів. Тому що реальні бізнес-проблеми не слідують шаблонам.

Потім прийшов повноцінний DevOps. Хмара, автоматизація, CI/CD, IaC...
Зараз? Я керую DevOps в Bosch. Веду технічний напрямок з боку EPAM. Azure, KQL, Helm, Terraform — все на мені.

І що я чую на ринку?

«Слабкий AWS?»
«Kubernetes не на рівні архітектора?»
«Python? Не бекендовий?»

Серйозно? Мені потрібно по 10 років досвіду в кожному інструменті, щоб довести, що я вирішую реальні задачі?

⸻

Що я реально роблю:
 • Побудував систему моніторингу на KQL для живого продукту
 • Інтегрував Azure OpenAI в Bosch — не заради хайпу, а для потреб команди
 • Створив CRM для фармкомпанії — сам, без архітектора
 • Спроєктував CI/CD пайплайни, які зекономили команді 70% часу
 • Веду та підтримую продову інфраструктуру самостійно

Але чую тільки:

«Python не бекендовий»
«AWS не глибоко»
«Kubernetes не з нуля»

Серйозно?

⸻

Зони росту? Чесно:
 • Kubernetes: операційний рівень, не архітектор (але рідко потрібно будувати з нуля)
 • AWS: базовий зараз, працюю з Lambda та IAM
 • Python: в основному скрипти
 • Kafka: знайомий, не використовував у проді
 • ECS / API Gateway: бачив, не будував сам

⸻

Англійська? Офіційно B1+, але працюю нею щодня.

Спілкуюся з командами з Німеччини, Індії, Португалії. Мене розуміють. Це головне.
Я не стендап-комік англійською — я роблю робочі PoC.

⸻

DevOps — це НЕ чекліст.

Це мислення.
Це відповідальність.
Це результат.
Це Я.
 • Я не просто читаю про Helm — я пишу чарти
 • Я не вчу CI/CD — я будую пайплайни
 • Я не "вчу" KQL — я моніторю прод
 • Я не мрію про лідерство — я веду, сам, у проді

⸻

І давай чесно:

Я вимушений переселенець.
Втратив дім. Рюкзак за плечима. Сирени над головою.
Але у мене є мозок, скіли і воля йти далі.

Я не ідеальний. Але я справжній.

І таких, як я, БАГАТО. Не ідеальних. Але справжніх.
Тих, хто бере відповідальність, вирішує біль, не боїться сказати:

«Я не знаю. Але розберуся».

Дякую рекрутерам і тим, хто наймає, хто дивиться глибше чекбоксів.
Хто бачить потенціал, а не тільки модні слова.
Хто може розгледіти діамант, навіть якщо він поки не блищить сертифікатом.

То хто я?`
  }
};

function Blog() {
  const { t, i18n } = useTranslation();
  const lang = ["en", "ru", "ua"].includes(i18n.language) ? i18n.language : "en";
  const post = blogPosts[lang];

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <Row>
          <Col md={12} className="blog-header">
            <h1 className="blog-title">
              <span className="purple">{post.title}</span>
            </h1>
            <p className="blog-subtitle">{t("blog.subtitle")}</p>
            <div className="post-meta" style={{ marginTop: 10 }}>
              <span className="post-date">{post.date}</span>
              <span className="post-read-time">{post.readTime}</span>
            </div>
            <div className="post-tags">
              {post.tags && post.tags.map((tag, idx) => (
                <span key={idx} className="post-tag">{tag}</span>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="blog-content">
          <Col md={12} className="blog-posts">
            {post.content.split(/\n{2,}/).map((para, idx) => (
              <p key={idx} className="post-content">{para}</p>
            ))}
            {/* Если нужен markdown:
            <ReactMarkdown className="post-content">{post.content}</ReactMarkdown>
            */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blog; 