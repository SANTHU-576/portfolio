import profile from "./assets/profile.png";
import { Typewriter } from "react-simple-typewriter";

function App() {
  const cardStyle = {
    background: "#FFFFFF",
    padding: "20px 30px",
    borderRadius: "18px",
    fontSize: "22px",
    fontWeight: "bold",
    border: "1px solid #CBD5E1",
    boxShadow: "0 0 15px rgba(37,99,235,0.15)",
    minWidth: "220px",
    transition: "0.3s",
    cursor: "pointer",
    color: "#0F172A",
  };

  const buttonStyle = {
    padding: "12px 28px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(to right, #2563EB, #1D4ED8)",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 0 20px rgba(37,99,235,0.25)",
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(to right, #F8FAFC, #EFF6FF, #E2E8F0)",
        color: "#0F172A",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      {/* Glow Effects */}

      <div
        style={{
          position: "fixed",
          top: "-100px",
          left: "-100px",
          width: "300px",
          height: "300px",
          background: "#2563EB",
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: "0.15",
        }}
      ></div>

      <div
        style={{
          position: "fixed",
          bottom: "-100px",
          right: "-100px",
          width: "300px",
          height: "300px",
          background: "#1D4ED8",
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: "0.15",
        }}
      ></div>

      {/* Hero Section */}

      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        {/* Profile Image */}

        <img
          src={profile}
          alt="profile" />
          style={{
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "5px solid white",
            boxShadow:
              "0 10px 30px rgba(37,99,235,0.25)",
            marginBottom: "20px",
          }}
        />

        {/* Name */}

        <h1
          style={{
            fontSize: "58px",
            marginBottom: "10px",
            color: "#0F172A",
          }}
        >
          Santhoshi 👋
        </h1>

        {/* Typing Animation */}

        <h2
          style={{
            color: "#2563EB",
            fontSize: "30px",
          }}
        >
          <Typewriter
            words={[
              "CSE Student",
              "React Developer",
              "Python Programmer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
          />
        </h2>

        {/* Buttons */}

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://github.com/SANTHU-576"
            target="_blank"
            rel="noreferrer"
          >
            <button style={buttonStyle}>GitHub</button>
          </a>

          <a
            href="https://www.linkedin.com/in/santhoshi-medidhi-119919292"
            target="_blank"
            rel="noreferrer"
          >
            <button style={buttonStyle}>LinkedIn</button>
          </a>

          <a
            href="/Santhoshi_Medidhi_resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button style={buttonStyle}>Resume</button>
          </a>
        </div>
      </div>

      {/* About */}

      <div
        style={{
          marginTop: "100px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#2563EB",
            fontSize: "45px",
          }}
        >
          About Me
        </h1>

        <p
          style={{
            maxWidth: "850px",
            margin: "auto",
            marginTop: "25px",
            fontSize: "22px",
            lineHeight: "40px",
            color: "#1E293B",
          }}
        >
          I am a passionate Computer Science student interested in
          Web Development, React, Python and AI technologies.
          I enjoy building modern responsive websites with
          beautiful UI and smooth animations.
        </p>
      </div>

      {/* Skills */}

      <div
        style={{
          marginTop: "100px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#2563EB",
            fontSize: "45px",
          }}
        >
          Skills
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          {[
            "Python",
            "Java",
            "HTML",
            "CSS",
            "React",
            "Flask",
          ].map((skill) => (
            <div key={skill} style={cardStyle}>
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}

      <div
        style={{
          marginTop: "100px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#2563EB",
            fontSize: "45px",
          }}
        >
          Projects
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <div style={cardStyle}>Fraud Detection System</div>

          <div style={cardStyle}>Portfolio Website</div>

          <div style={cardStyle}>LearnHub Platform</div>
        </div>
      </div>

      {/* Certifications */}

      <div
        style={{
          marginTop: "100px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#2563EB",
            fontSize: "45px",
          }}
        >
          Certifications
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          {[
            "Python Certification",
            "Web Development",
            "Java Programming",
          ].map((cert) => (
            <div key={cert} style={cardStyle}>
              {cert}
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}

      <div
        style={{
          marginTop: "100px",
          textAlign: "center",
          paddingBottom: "60px",
        }}
      >
        <h1
          style={{
            color: "#2563EB",
            fontSize: "45px",
            marginBottom: "25px",
          }}
        >
          Contact
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#0F172A",
            marginBottom: "12px",
          }}
        >
          📧 medidhisanthoshi@gmail.com
        </p>

        <p
          style={{
            fontSize: "22px",
            color: "#0F172A",
            marginBottom: "25px",
          }}
        >
          📱 +91 9963697385
        </p>
      </div>
    </div>
  );
}

export default App;