import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Particle from "../Particle";
import ReactMarkdown from "react-markdown";
import { blogPosts } from "../../content/blog";

function Blog() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const postRef = useRef(null);
  const firstLoad = useRef(true);

  useEffect(() => {
    setLoading(true);
    if (blogPosts.length > 0) {
      setSelectedId(blogPosts[0].id);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!firstLoad.current && postRef.current) {
      postRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    firstLoad.current = false;
  }, [selectedId]);

  const selectedPost = blogPosts.find((p) => p.id === selectedId) || blogPosts[0];

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
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className={`blog-post-card${post.id === selectedPost?.id ? " selected" : ""}`}
                  onClick={() => setSelectedId(post.id)}
                  style={{ cursor: "pointer", marginBottom: 20 }}
                >
                  <Card.Body>
                    <Card.Title className="post-title">{post[lang]?.title || post.en.title}</Card.Title>
                    <div className="post-meta">
                      <span className="post-date">{post[lang]?.date || post.en.date}</span>
                      <span className="post-read-time">{post[lang]?.readTime || post.en.readTime}</span>
                    </div>
                    <div className="post-tags">
                      {post[lang]?.tags?.map((tag, idx) => (
                        <span key={idx} className="post-tag">{tag}</span>
                      ))}
                    </div>
                    <Card.Text className="post-excerpt">
                      {post[lang]?.preview || post.en.preview}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Col>
            <Col md={8} className="blog-full-post" ref={postRef}>
              {selectedPost && (
                <>
                  <h2 className="post-title">{selectedPost[lang]?.title || selectedPost.en.title}</h2>
                  <div className="post-meta">
                    <span className="post-date">{selectedPost[lang]?.date || selectedPost.en.date}</span>
                    <span className="post-read-time">{selectedPost[lang]?.readTime || selectedPost.en.readTime}</span>
                  </div>
                  <div className="post-tags">
                    {selectedPost[lang]?.tags?.map((tag, idx) => (
                      <span key={idx} className="post-tag">{tag}</span>
                    ))}
                  </div>
                  <ReactMarkdown className="post-content">
                    {selectedPost[lang]?.content || selectedPost.en.content}
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