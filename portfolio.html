<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maya Rodriguez - Holographic Developer Interface</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Roboto+Mono:wght@300;400;500&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary-bg: #000510;
            --terminal-bg: rgba(0, 20, 40, 0.8);
            --neon-blue: #00ffff;
            --neon-purple: #ff00ff;
            --neon-green: #00ff41;
            --neon-orange: #ff8c00;
            --text-primary: #ffffff;
            --text-secondary: #a0a0a0;
            --hologram-bg: rgba(0, 255, 255, 0.05);
            --scanline-color: rgba(0, 255, 255, 0.1);
        }

        body {
            font-family: 'Roboto Mono', monospace;
            background: var(--primary-bg);
            color: var(--text-primary);
            overflow-x: hidden;
            cursor: none;
        }

        /* Custom cursor */
        .cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid var(--neon-blue);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
            mix-blend-mode: difference;
        }

        .cursor.hover {
            transform: scale(2);
            border-color: var(--neon-purple);
        }

        /* Matrix rain background */
        .matrix-rain {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.1;
        }

        /* Holographic scanlines */
        .scanlines {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
            background: repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                var(--scanline-color) 2px,
                var(--scanline-color) 4px
            );
            animation: scanlines-move 0.1s linear infinite;
        }

        @keyframes scanlines-move {
            0% { transform: translateY(0); }
            100% { transform: translateY(4px); }
        }

        /* Terminal window */
        .terminal {
            position: fixed;
            top: 20px;
            right: 20px;
            width: 300px;
            height: 200px;
            background: var(--terminal-bg);
            border: 1px solid var(--neon-blue);
            border-radius: 8px;
            backdrop-filter: blur(10px);
            z-index: 1000;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
        }

        .terminal-header {
            background: rgba(0, 255, 255, 0.1);
            padding: 8px;
            border-bottom: 1px solid var(--neon-blue);
            font-size: 0.8rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .terminal-content {
            padding: 10px;
            font-size: 0.7rem;
            line-height: 1.4;
        }

        .terminal-line {
            margin-bottom: 5px;
            opacity: 0;
            animation: terminal-type 0.5s ease forwards;
        }

        .terminal-line:nth-child(1) { animation-delay: 0.5s; }
        .terminal-line:nth-child(2) { animation-delay: 1s; }
        .terminal-line:nth-child(3) { animation-delay: 1.5s; }
        .terminal-line:nth-child(4) { animation-delay: 2s; }
        .terminal-line:nth-child(5) { animation-delay: 2.5s; }

        @keyframes terminal-type {
            to { opacity: 1; }
        }

        .blinking-cursor::after {
            content: '█';
            animation: blink 1s infinite;
            color: var(--neon-green);
        }

        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }

        /* Navigation */
        .nav {
            position: fixed;
            top: 50%;
            left: 20px;
            transform: translateY(-50%);
            z-index: 1000;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .nav-item {
            width: 60px;
            height: 60px;
            background: var(--hologram-bg);
            border: 2px solid var(--neon-blue);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: var(--neon-blue);
            font-size: 1.5rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            position: relative;
            overflow: hidden;
        }

        .nav-item::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: radial-gradient(circle, var(--neon-blue), transparent);
            transition: all 0.3s ease;
            transform: translate(-50%, -50%);
        }

        .nav-item:hover::before {
            width: 100%;
            height: 100%;
        }

        .nav-item:hover {
            transform: scale(1.1);
            box-shadow: 0 0 30px var(--neon-blue);
        }

        .nav-item.active {
            border-color: var(--neon-purple);
            color: var(--neon-purple);
            box-shadow: 0 0 20px var(--neon-purple);
        }

        /* Main content */
        .main-content {
            margin-left: 120px;
            padding: 40px;
            min-height: 100vh;
        }

        /* Hero section */
        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
        }

        .hero-content {
            max-width: 800px;
            z-index: 2;
        }

        .glitch-text {
            font-family: 'Orbitron', monospace;
            font-size: clamp(3rem, 8vw, 6rem);
            font-weight: 900;
            background: linear-gradient(45deg, var(--neon-blue), var(--neon-purple), var(--neon-green));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            position: relative;
            margin-bottom: 20px;
            animation: glitch-anim 2s infinite;
        }

        @keyframes glitch-anim {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
        }

        .glitch-text::before,
        .glitch-text::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .glitch-text::before {
            animation: glitch-anim-1 0.5s infinite;
            color: var(--neon-blue);
            z-index: -1;
        }

        .glitch-text::after {
            animation: glitch-anim-2 0.5s infinite;
            color: var(--neon-purple);
            z-index: -2;
        }

        @keyframes glitch-anim-1 {
            0% { transform: translate(0); }
            10% { transform: translate(-2px, -2px); }
            20% { transform: translate(-2px, -2px); }
            30% { transform: translate(-2px, -2px); }
            40% { transform: translate(-2px, -2px); }
            50% { transform: translate(-2px, -2px); }
            60% { transform: translate(-2px, -2px); }
            70% { transform: translate(-2px, -2px); }
            80% { transform: translate(-2px, -2px); }
            90% { transform: translate(-2px, -2px); }
            100% { transform: translate(0); }
        }

        @keyframes glitch-anim-2 {
            0% { transform: translate(0); }
            10% { transform: translate(2px, 2px); }
            20% { transform: translate(2px, 2px); }
            30% { transform: translate(2px, 2px); }
            40% { transform: translate(2px, 2px); }
            50% { transform: translate(2px, 2px); }
            60% { transform: translate(2px, 2px); }
            70% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, 2px); }
            90% { transform: translate(2px, 2px); }
            100% { transform: translate(0); }
        }

        .hero-subtitle {
            font-size: 1.5rem;
            color: var(--neon-green);
            margin-bottom: 30px;
            text-shadow: 0 0 10px var(--neon-green);
        }

        .hero-description {
            font-size: 1.1rem;
            color: var(--text-secondary);
            margin-bottom: 40px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .hologram-avatar {
            position: absolute;
            right: 100px;
            top: 50%;
            transform: translateY(-50%);
            width: 250px;
            height: 300px;
            border: 2px solid var(--neon-blue);
            border-radius: 10px;
            background: var(--hologram-bg);
            backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 6rem;
            animation: hologram-flicker 3s infinite;
            box-shadow: 0 0 30px var(--neon-blue);
        }

        @keyframes hologram-flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
            75% { opacity: 0.9; }
        }

        /* Section styling */
        .section {
            min-height: 100vh;
            padding: 80px 0;
            border-bottom: 1px solid rgba(0, 255, 255, 0.2);
        }

        .section-title {
            font-family: 'Orbitron', monospace;
            font-size: 2.5rem;
            color: var(--neon-blue);
            margin-bottom: 50px;
            text-align: center;
            text-shadow: 0 0 20px var(--neon-blue);
            position: relative;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--neon-blue), transparent);
        }

        /* About section */
        .about-grid {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 60px;
            align-items: center;
        }

        .about-stats {
            background: var(--hologram-bg);
            border: 1px solid var(--neon-blue);
            border-radius: 10px;
            padding: 30px;
            backdrop-filter: blur(10px);
        }

        .stat-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            padding: 10px 0;
            border-bottom: 1px solid rgba(0, 255, 255, 0.2);
        }

        .stat-label {
            color: var(--text-secondary);
        }

        .stat-value {
            color: var(--neon-green);
            font-weight: bold;
        }

        .about-content {
            color: var(--text-secondary);
            line-height: 1.8;
        }

        .about-content h3 {
            color: var(--neon-purple);
            margin-bottom: 20px;
            font-family: 'Orbitron', monospace;
        }

        /* Skills section */
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .skill-category {
            background: var(--hologram-bg);
            border: 1px solid var(--neon-blue);
            border-radius: 10px;
            padding: 30px;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
        }

        .skill-category:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 255, 255, 0.2);
        }

        .skill-category h3 {
            color: var(--neon-orange);
            margin-bottom: 20px;
            font-family: 'Orbitron', monospace;
        }

        .skill-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }

        .skill-bar {
            width: 100px;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
        }

        .skill-progress {
            height: 100%;
            background: linear-gradient(90deg, var(--neon-blue), var(--neon-purple));
            border-radius: 2px;
            animation: skill-load 2s ease-in-out;
        }

        @keyframes skill-load {
            from { width: 0%; }
        }

        /* Projects section */
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
        }

        .project-card {
            background: var(--hologram-bg);
            border: 1px solid var(--neon-blue);
            border-radius: 10px;
            overflow: hidden;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            position: relative;
        }

        .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent);
            transition: left 0.5s;
        }

        .project-card:hover::before {
            left: 100%;
        }

        .project-card:hover {
            transform: scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 255, 255, 0.2);
        }

        .project-image {
            height: 200px;
            background: linear-gradient(45deg, var(--neon-blue), var(--neon-purple));
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            color: white;
        }

        .project-content {
            padding: 25px;
        }

        .project-title {
            color: var(--neon-green);
            margin-bottom: 10px;
            font-family: 'Orbitron', monospace;
        }

        .project-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 15px 0;
        }

        .tech-tag {
            background: rgba(0, 255, 255, 0.1);
            border: 1px solid var(--neon-blue);
            color: var(--neon-blue);
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
        }

        /* Contact section */
        .contact-container {
            max-width: 800px;
            margin: 0 auto;
            background: var(--hologram-bg);
            border: 1px solid var(--neon-blue);
            border-radius: 10px;
            padding: 40px;
            backdrop-filter: blur(10px);
        }

        .contact-form {
            display: grid;
            gap: 25px;
        }

        .form-group {
            display: flex;
            flex-direction: column;
        }

        .form-group label {
            color: var(--neon-blue);
            margin-bottom: 8px;
            font-weight: bold;
        }

        .form-group input,
        .form-group textarea {
            background: rgba(0, 255, 255, 0.05);
            border: 1px solid var(--neon-blue);
            border-radius: 5px;
            padding: 15px;
            color: var(--text-primary);
            font-family: 'Roboto Mono', monospace;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--neon-purple);
            box-shadow: 0 0 20px rgba(255, 0, 255, 0.3);
        }

        .neon-button {
            background: transparent;
            border: 2px solid var(--neon-green);
            color: var(--neon-green);
            padding: 15px 30px;
            border-radius: 30px;
            font-family: 'Orbitron', monospace;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .neon-button:hover {
            background: var(--neon-green);
            color: var(--primary-bg);
            box-shadow: 0 0 30px var(--neon-green);
            transform: translateY(-2px);
        }

        /* Floating particles */
        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--neon-blue);
            border-radius: 50%;
            pointer-events: none;
            animation: float-particle 10s infinite linear;
        }

        @keyframes float-particle {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }

        /* Responsive design */
        @media (max-width: 768px) {
            .main-content {
                margin-left: 0;
                padding: 20px;
            }

            .nav {
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                flex-direction: row;
                background: var(--terminal-bg);
                padding: 15px;
                border-radius: 30px;
                border: 1px solid var(--neon-blue);
            }

            .nav-item {
                width: 50px;
                height: 50px;
                font-size: 1.2rem;
            }

            .terminal {
                display: none;
            }

            .hologram-avatar {
                position: static;
                transform: none;
                margin: 30px auto;
                width: 200px;
                height: 240px;
            }

            .about-grid {
                grid-template-columns: 1fr;
                gap: 30px;
            }

            .glitch-text {
                font-size: 2.5rem;
            }
        }
    </style>
</head>
<body>
    <!-- Custom cursor -->
    <div class="cursor"></div>

    <!-- Matrix rain background -->
    <canvas class="matrix-rain" id="matrixRain"></canvas>

    <!-- Holographic scanlines -->
    <div class="scanlines"></div>

    <!-- Terminal window -->
    <div class="terminal">
        <div class="terminal-header">
            <span>system_status.exe</span>
            <span>●●●</span>
        </div>
        <div class="terminal-content">
            <div class="terminal-line">$ whoami</div>
            <div class="terminal-line">maya.rodriguez</div>
            <div class="terminal-line">$ status</div>
            <div class="terminal-line">ONLINE - READY TO CODE</div>
            <div class="terminal-line blinking-cursor">$ _</div>
        </div>
    </div>

    <!-- Navigation -->
    <nav class="nav">
        <a href="#home" class="nav-item active" data-section="home">🏠</a>
        <a href="#about" class="nav-item" data-section="about">👤</a>
        <a href="#skills" class="nav-item" data-section="skills">⚡</a>
        <a href="#projects" class="nav-item" data-section="projects">💻</a>
        <a href="#contact" class="nav-item" data-section="contact">📡</a>
    </nav>

    <!-- Main content -->
    <main class="main-content">
        <!-- Hero section -->
        <section id="home" class="hero section">
            <div class="hero-content">
                <h1 class="glitch-text" data-text="MAYA RODRIGUEZ">MAYA RODRIGUEZ</h1>
                <p class="hero-subtitle">[ FULL-STACK DEVELOPER | CYBERSECURITY SPECIALIST ]</p>
                <p class="hero-description">
                    Crafting digital experiences in the intersection of code and creativity. 
                    Specializing in secure, scalable applications that push the boundaries of what's possible.
                </p>
            </div>
            <div class="hologram-avatar">👩‍💻</div>
        </section>

        <!-- About section -->
        <section id="about" class="section">
            <h2 class="section-title">ABOUT.EXE</h2>
            <div class="about-grid">
                <div class="about-stats">
                    <div class="stat-item">
                        <span class="stat-label">EXPERIENCE</span>
                        <span class="stat-value">7+ YEARS</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">PROJECTS</span>
                        <span class="stat-value">150+ COMPLETED</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">CLIENTS</span>
                        <span class="stat-value">50+ WORLDWIDE</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">UPTIME</span>
                        <span class="stat-value">99.9%</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">COFFEE</span>
                        <span class="stat-value">UNLIMITED</span>
                    </div>
                </div>
                <div class="about-content">
                    <h3>DIGITAL ARCHITECT & CODE WARRIOR</h3>
                    <p>
                        Born in the digital age, I've been crafting code since I was 12. My journey began with 
                        simple HTML pages and evolved into complex, enterprise-level applications that serve 
                        millions of users worldwide.
                    </p>
                    <p>
                        <strong>EDUCATION:</strong> M.S. Computer Science, Stanford University (2018)<br>
                        <strong>CERTIFICATIONS:</strong> AWS Solutions Architect, CISSP, Ethical Hacker<br>
                        <strong>CURRENT ROLE:</strong> Senior Full-Stack Developer at CyberCorp Industries
                    </p>
                    <p>
                        I specialize in building secure, scalable applications using cutting-edge technologies. 
                        My passion lies in cybersecurity, AI integration, and creating immersive user experiences 
                        that blur the line between digital and reality. When I'm not coding, you'll find me 
                        contributing to open-source projects or mentoring the next generation of developers.
                    </p>
                </div>
            </div>
        </section>

        <!-- Skills section -->
        <section id="skills" class="section">
            <h2 class="section-title">SKILLS.DB</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h3>FRONTEND ARSENAL</h3>
                    <div class="skill-item">
                        <span>React/Next.js</span>
                        <div class="skill-bar"><div class="skill-progress" style="width: 95%"></div></div>
                    </div>
                    <div class="skill-item">
                        <span>TypeScript</span>
                        <div class="skill-bar"><div class="skill-progress" style="width: 92%"></div></div>
                    </div>
                    <div class="skill-item">
                        <span>Three.js/WebGL</span>
                        <div class="skill-bar"><div class="skill-progress" style="width: 88%"></div></div>
                    </div>
                    <div class="skill-item">
                        <span>Vue.js</span>
                        <div class="skill-bar"><div class="skill-progress" style="width: 85%"></div></div>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>BACKEND FORTRESS</h3>
                    <div class="skill-item">
                        <span>Node.js/Express</span>
                        <div class="skill-bar"><div class="skill-progress" style="width: 93%"></div></div>
                    </div>
                    <div class="skill-item">
                        <span>Python/Django</span>
                        <div class="skill-bar"><div class="skill-progress" style="width: 90%"></div></div>
                    </div>
                    <div class="skill-item">
                        <span>PostgreSQL</span>
                        <div class="skill-bar"><div class="skill-progress" style="width: 87%"></div></div>
                    </div>
                    <div class="skill-item">
                        <span>Docker/K8s</span>
                        <div class="skill-bar"><div class="skill-progress" style="width: 84%"></div></div>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>SECURITY PROTOCOLS</h3>
                    <div class="skill-item">
                        <span>Penetration Testing</span>
                        <div class="skill-bar"><div class="skill-progress" style="width: 91%"></div></div>
                    </div>
                    <div class="skill-item">
                        <span>Cryptography</span>
                        <div class="skill-bar"><div class="skill-progress" style="width: 88%"></div></div>
                    </div>
                    <div class="skill-item">
                        <span>OAuth/JWT</span>
                        <div class="skill-bar"><div class="skill-progress" style="width: 93%"></div></div>
                    </div>
                    <div class="skill-item">
                        <span>OWASP</span>
                        <div class="skill-bar"><div class="skill-progress" style="width: 89%"></div></div>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>CLOUD INFRASTRUCTURE</h3>
                    <div class="skill-item">
                        <span>AWS</span>
                        <div class="skill-bar"><div class="skill-progress" style="width: 92%"></div></div>
                    </div>
                    <div class="skill-item">
                        <span>Google Cloud</span>
                        <div class="skill-bar"><div class="skill-progress" style="width: 85%"></div></div>
                    </div>
                    <div class="skill-item">
                        <span>Terraform</span>
                        <div class="skill-bar"><div class="skill-progress" style="width: 83%"></div></div>
                    </div>
                    <div class="skill-item">
                        <span>CI/CD</span>
                        <div class="skill-bar"><div class="skill-progress" style="width: 90%"></div></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects section -->
        <section id="projects" class="section">
            <h2 class="section-title">PROJECTS.LOG</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-