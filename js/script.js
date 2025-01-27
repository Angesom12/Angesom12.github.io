<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Angesom Gebremariam - Professional Portfolio</title>
    <style>
        :root {
            --primary-color: #1a5f7a;
            --secondary-color: #2c3e50;
            --accent-color: #3498db;
            --text-color: #2c3e50;
            --light-bg: #f8f9fa;
            --success-color: #2ecc71;
            --section-padding: 3rem 0;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--light-bg);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        /* Navigation */
        .nav {
            background: var(--primary-color);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
        }

        .nav-logo {
            color: white;
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: bold;
        }

        .nav-menu {
            display: flex;
            gap: 1.5rem;
            list-style: none;
        }

        .nav-link {
            color: white;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .nav-link:hover {
            color: var(--accent-color);
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 8rem 0 4rem;
            margin-bottom: 2rem;
        }

        .hero-content {
            display: flex;
            align-items: center;
            gap: 4rem;
        }

        .hero-image {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: var(--accent-color);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            color: white;
            flex-shrink: 0;
        }

        .hero-text h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        .hero-text h2 {
            color: var(--accent-color);
            font-weight: normal;
            margin-bottom: 1.5rem;
        }

        .contact-info {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            margin-top: 1.5rem;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        /* Section Styling */
        .section {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .section-title {
            color: var(--primary-color);
            margin-bottom: 2rem;
            padding-bottom: 0.5rem;
            border-bottom: 3px solid var(--accent-color);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        /* Grid Layouts */
        .skills-grid,
        .project-grid,
        .references-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
        }

        .skill-category {
            background: var(--light-bg);
            padding: 1.5rem;
            border-radius: 8px;
            transition: transform 0.3s ease;
        }

        .skill-category:hover {
            transform: translateY(-5px);
        }

        .skill-category h4 {
            color: var(--primary-color);
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid var(--accent-color);
        }

        .skill-list {
            list-style: none;
        }

        .skill-list li {
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .skill-list li::before {
            content: "→";
            color: var(--accent-color);
        }

        /* Timeline */
        .timeline {
            position: relative;
        }

        .timeline-item {
            padding: 1.5rem;
            background: var(--light-bg);
            border-radius: 8px;
            margin-bottom: 1.5rem;
            border-left: 4px solid var(--accent-color);
        }

        .timeline-date {
            color: var(--primary-color);
            font-weight: bold;
            margin-bottom: 0.5rem;
        }

        .timeline-title {
            color: var(--secondary-color);
            margin-bottom: 1rem;
        }

        /* Project Cards */
        .project-card {
            background: var(--light-bg);
            padding: 1.5rem;
            border-radius: 8px;
            transition: transform 0.3s ease;
        }

        .project-card:hover {
            transform: translateY(-5px);
        }

        /* Language Cards */
        .language-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1rem;
        }

        .language-card {
            background: var(--light-bg);
            padding: 1rem;
            border-radius: 8px;
            text-align: center;
        }

        .language-name {
            font-weight: bold;
            color: var(--primary-color);
            margin-bottom: 0.5rem;
        }

        .language-level {
            color: var(--secondary-color);
        }

        /* Reference Cards */
        .reference-card {
            background: var(--light-bg);
            padding: 1.5rem;
            border-radius: 8px;
        }

        .reference-name {
            color: var(--primary-color);
            font-weight: bold;
            margin-bottom: 0.5rem;
        }

        /* Publications */
        .publications-list {
            list-style: none;
        }

        .publications-list li {
            background: var(--light-bg);
            padding: 1rem;
            margin-bottom: 1rem;
            border-radius: 8px;
            border-left: 4px solid var(--accent-color);
        }

        /* Awards */
        .awards-list {
            list-style: none;
        }

        .awards-list li {
            background: var(--light-bg);
            padding: 1rem;
            margin-bottom: 1rem;
            border-radius: 8px;
            border-left: 4px solid var(--success-color);
        }

        /* Professional Development */
        .development-list {
            list-style: none;
        }

        .development-list li {
            background: var(--light-bg);
            padding: 1rem;
            margin-bottom: 1rem;
            border-radius: 8px;
            border-left: 4px solid var(--primary-color);
        }

        /* Extracurricular */
        .extracurricular-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1rem;
        }

        .activity-card {
            background: var(--light-bg);
            padding: 1rem;
            border-radius: 8px;
            text-align: center;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .hero-content {
                flex-direction: column;
                text-align: center;
            }

            .contact-info {
                justify-content: center;
            }

            .nav-menu {
                display: none;
            }

            .skills-grid,
            .project-grid,
            .references-grid {
                grid-template-columns: 1fr;
            }
        }

        /* Print Styles */
        @media print {
            .nav {
                position: static;
                margin-bottom: 2rem;
            }

            .hero {
                padding: 2rem 0;
            }

            .section {
                break-inside: avoid;
                page-break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="nav">
        <div class="nav-container">
            <a href="#" class="nav-logo">AG Portfolio</a>
            <ul class="nav-menu">
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#skills" class="nav-link">Skills</a></li>
                <li><a href="#experience" class="nav-link">Experience</a></li>
                <li><a href="#education" class="nav-link">Education</a></li>
                <li><a href="#certifications" class="nav-link">Certifications</a></li>
                <li><a href="#projects" class="nav-link">Projects</a></li>
                <li><a href="#publications" class="nav-link">Publications</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="about">
        <div class="container">
            <div class="hero-content">
                <div class="hero-image">AG</div>
                <div class="hero-text">
                    <h1>Angesom Gebremariam</h1>
                    <h2>Environmental Engineer | Remote Sensing Specialist | Geospatial Analytics Expert</h2>
                    <p>Dedicated Environmental Engineer with over 10 years of expertise in land resources management, water engineering, and sustainable development.</p>
                    <div class="contact-info">
                        <div class="contact-item">
                            <span>📧</span>
                            <a href="mailto:angesom.gebremariam2019@gmail.com" style="color: white; text-decoration: none;">
                                angesom.gebremariam2019@gmail.com
                            </a>
                        </div>
                        <div class="contact-item">
                            <span>📱</span>
                            <span>(+48) 692008818</span>
                        </div>
                        <div class="contact-item">
                            <span>📍</span>
                            <span>Akademicka 5, 02-038 Warsaw, Poland</span>
                        </div>
                        <div class="contact-item">
                            <span>🌐</span>
                            <span>Ethiopian</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="container">
        <!-- Professional Summary -->
        <section class="section">
            <h3 class="section-title">Professional Summary</h3>
            <p>Dedicated Environmental Engineer with over 10 years of expertise in land resources management, water engineering, and sustainable development. Certified in Advanced Conformance Engineering Analytics and Quality Engineering, with extensive experience in remote sensing, geospatial analysis, and environmental modeling. Notable achievements include contributions to soil quality assessment, dam engineering analytics, and advanced climate adaptation strategies. Recognized for academic excellence and research on spatio-temporal soil moisture dynamics and viticulture soil quality. Demonstrates proficiency in ISO 9001, IATF 16949, and statistical tools such as Minitab, with a strong foundation in design of experiments and quality management systems.</p>
        </section>

        <!-- Technical Skills -->
        <section class="section" id="skills">
            <h3 class="section-title">Technical Skills</h3>
            <div class="skills-grid">
                <div class="skill-category">
                    <h4>GIS and Remote Sensing</h4>
                    <ul class="skill-list">
                        <li>ArcGIS Pro Advanced (4 years)</li>
                        <li>QGIS Desktop (5 years)</li>
                        <li>Google Earth Engine (3 years)</li>
                        <li>SNAP ESA (2 years)</li>
                        <li>ArcSWAT</li>
                        <li>QField</li>
                        <li>Earth Observation</li>
                    </ul>
                </div>

                <div class="skill-category">
                    <h4>Data Analysis and Programming</h4>
                    <ul class="skill-list">
                        <li>Python with geospatial libraries (pandas, numpy, matplotlib)</li>
                        <li>R for statistical analysis and visualization</li>
                        <li>MATLAB for numerical computing</li>
                        <li>Minitab for statistical analysis</li>
                        <li>Jupyter Notebook</li>
                        <li>Version control with Git and GitHub</li>
                        <li>Cloud computing (Google Cloud Platform)</li>
                        <li>Machine learning frameworks (scikit-learn, TensorFlow)</li>
                    </ul>
                </div>

                <div class="skill-category">
                    <h4>Environmental Modeling</h4>
                    <ul class="skill-list">
                        <li>ModFLOW for groundwater modeling</li>
                        <li>MIKE URBAN</li>
                        <li>AutoCAD</li>
                        <li>INFOWORKS ICM</li>
                        <li>ePanet</li>
                        <li>SGeMS for spatial interpolation</li>
                    </ul>
                </div>

                <div class="skill-category">
                    <h4>Energy Modeling</h4>
                    <ul class="skill-list">
                        <li>PV GIS</li>
                        <li>3D Energy Modeling</li>
                        <li>RETScreen</li>
                    </ul>
                </div>

                <div class="skill-category">
                    <h4>Visualization and Business Intelligence</h4>
                    <ul class="skill-list">
                        <li>Tableau</li>
                        <li>Microsoft Power BI</li>
                        <li>Microsoft Office Suite</li>
                        <li>Google Workspace</li>
                    </ul>
					</div>
            </div>
        </section>

        <!-- Laboratory and Field Skills -->
        <section class="section">
            <h3 class="section-title">Laboratory and Field Skills</h3>
            <div class="skills-grid">
                <div class="skill-category">
                    <h4>Soil Analysis</h4>
                    <ul class="skill-list">
                        <li>Texture and particle size determination</li>
                        <li>pH and EC measurement</li>
                        <li>Organic matter content analysis</li>
                        <li>Nutrient analysis</li>
                        <li>Sample preparation (grinding, sieving, digestion)</li>
                        <li>Soil vapor analysis</li>
                    </ul>
                </div>

                <div class="skill-category">
                    <h4>Water Quality Analysis</h4>
                    <ul class="skill-list">
                        <li>Physical parameters testing</li>
                        <li>Chemical analysis</li>
                        <li>Biological parameters assessment</li>
                        <li>BOD, COD, TSS, TDS measurements</li>
                        <li>Indoor and ambient air quality assessment</li>
                        <li>Sediment analysis</li>
                        <li>Surface water evaluation</li>
                        <li>Groundwater testing</li>
                    </ul>
                </div>

                <div class="skill-category">
                    <h4>Forestry Research Skills</h4>
                    <ul class="skill-list">
                        <li>Tree measurements (diameter, height, crown)</li>
                        <li>Root system analysis</li>
                        <li>Leaf Area Index (LAI) determination</li>
                        <li>Dendrochronology studies</li>
                        <li>Tree ring analysis</li>
                        <li>Growth pattern assessment</li>
                        <li>Morphological characterization</li>
                        <li>Physiological parameter monitoring</li>
                        <li>Health assessment protocols</li>
                        <li>Field and nursery transplanting evaluation</li>
                    </ul>
                </div>

                <div class="skill-category">
                    <h4>Field Work</h4>
                    <ul class="skill-list">
                        <li>Environmental sampling protocols</li>
                        <li>GPS and surveying techniques</li>
                        <li>Soil moisture probe operation</li>
                        <li>Infiltrometer measurements</li>
                        <li>Quality control procedures</li>
                        <li>Safety protocols implementation</li>
                        <li>Ecosystem health assessment</li>
                        <li>Biodiversity monitoring</li>
                        <li>Habitat evaluation</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Machine Learning and Statistical Skills -->
        <section class="section">
            <h3 class="section-title">Machine Learning and Statistical Skills</h3>
            <div class="skills-grid">
                <div class="skill-category">
                    <h4>Programming Frameworks</h4>
                    <ul class="skill-list">
                        <li>TensorFlow for deep learning applications</li>
                        <li>PyTorch for machine learning models</li>
                        <li>scikit-learn for data analysis</li>
                        <li>Statistical analysis in R and Minitab</li>
                        <li>Google Earth Engine JavaScript API</li>
                    </ul>
                </div>

                <div class="skill-category">
                    <h4>Analysis Techniques</h4>
                    <ul class="skill-list">
                        <li>Random Forest implementation</li>
                        <li>Mixed Linear Models</li>
                        <li>Analysis of Variance (ANOVA)</li>
                        <li>Spatial interpolation</li>
                        <li>Feature extraction</li>
                        <li>Data preprocessing</li>
                        <li>Hypothesis testing</li>
                        <li>Regression analysis</li>
                        <li>Clustering methodologies</li>
                        <li>Pattern recognition</li>
                    </ul>
                </div>

                <div class="skill-category">
                    <h4>Numerical/Mechanistic Modeling</h4>
                    <ul class="skill-list">
                        <li>Earth system modeling</li>
                        <li>Land surface models</li>
                        <li>Soil-vegetation-atmosphere systems</li>
                        <li>Hydrologic modeling</li>
                        <li>Mixed linear models for soil moisture prediction</li>
                        <li>Climate feedback systems</li>
                        <li>Watershed modeling</li>
                    </ul>
                </div>

                <div class="skill-category">
                    <h4>Technical Proficiency</h4>
                    <ul class="skill-list">
                        <li>Model parameterization</li>
                        <li>Software calibration</li>
                        <li>Component modification</li>
                        <li>Validation protocols</li>
                        <li>Real-world application implementation</li>
                        <li>Data integration</li>
                        <li>System optimization</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Education -->
        <section class="section" id="education">
            <h3 class="section-title">Education</h3>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">March 2021 - September 2024</div>
                    <h4 class="timeline-title">M.Sc. in Environmental Engineering</h4>
                    <p><strong>Institution:</strong> Warsaw University of Technology, Poland</p>
                    <ul class="skill-list">
                        <li>Specialization: Environmental Protection Engineering/Remote Sensing and Geospatial Data Analytics</li>
                        <li>Thesis: "Remote Sensing Based Analysis of Spatio Temporal Soil Moisture Dynamics in the Tigray Region Ethiopia"</li>
                        <li>Research Focus: Integration of satellite data and ground measurements for soil moisture analysis</li>
                    </ul>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">July 2014 - October 2017</div>
                    <h4 class="timeline-title">BSc. in Land Resources Management and Environmental Protection</h4>
                    <p><strong>Institution:</strong> Mekelle University, Ethiopia</p>
                    <ul class="skill-list">
                        <li>Specialization: Soil Resources and Watershed Management</li>
                        <li>Thesis: "Soil Quality Assessment in Viticultural Crops: A Case Study of Pome Gold Fruits PLC in Tigray Ethiopia"</li>
                        <li>Achievement: Full scholarship recipient</li>
                    </ul>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">October 2002 - July 2005</div>
                    <h4 class="timeline-title">Diploma in Natural Resources Development and Conservation</h4>
                    <p><strong>Institution:</strong> Maichew Agricultural Vocational Education Training College, Ethiopia</p>
                    <ul class="skill-list">
                        <li>Achievement: Gold Medal recipient with 4.0/4.0 GPA</li>
                    </ul>
                </div>
            </div>
        </section>
		<!-- Certifications -->
        <section class="section" id="certifications">
            <h3 class="section-title">Certifications and Professional Training</h3>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">November 2022 - April 2024</div>
                    <h4 class="timeline-title">Advanced Conformance Engineering Analytics</h4>
                    <p><strong>Organization:</strong> PERSIMMON & HELOIS ASQ ENGINEERING SOLUTIONS LLC, USA</p>
                    <p><strong>Level:</strong> EQF level 7</p>
                    <p><strong>Performance:</strong> GPA 3.89</p>
                    <ul class="skill-list">
                        <li>Quality engineering and statistical process control</li>
                        <li>ISO 9001, IATF 16949, AS 9100 quality management systems</li>
                        <li>Design and analysis of experiments (DOE)</li>
                        <li>Risk management techniques and process capability analysis</li>
                        <li>Notable Grades: Design of Experiments (A+), Process Capability Analysis (A+), Advanced Product Quality Planning (A)</li>
                    </ul>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">October 2023</div>
                    <h4 class="timeline-title">ESRI Training Certifications</h4>
                    <ul class="skill-list">
                        <li>Imagery in Action (6 weeks)
                            <ul>
                                <li>Satellite, aerial, and drone imagery integration</li>
                                <li>Advanced analysis techniques for environmental monitoring</li>
                                <li>Change detection and classification</li>
                            </ul>
                        </li>
                        <li>Transform AEC Projects with GIS and BIM
                            <ul>
                                <li>GIS-BIM integration for project management</li>
                                <li>3D GIS visualization and infrastructure management</li>
                            </ul>
                        </li>
                        <li>Spatial Data Science: The New Frontier in Analytics</li>
                    </ul>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">2023</div>
                    <h4 class="timeline-title">GIS Training - Milan, Italy</h4>
                    <p><strong>Program:</strong> ATHENS Program (Code: POLI25)</p>
                    <p><strong>Location:</strong> Leonardo Campus, Politecnico Di Milano</p>
                    <ul class="skill-list">
                        <li>Tree density distribution mapping and structure analysis</li>
                        <li>People's preferences assessment using Geoportale Milano</li>
                        <li>Created relationship maps between tree density/crown width and public space usage</li>
                    </ul>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">June - July 2023</div>
                    <h4 class="timeline-title">Water Resources Assessment Course</h4>
                    <p><strong>Organization:</strong> EO AFRICA R&D Facility</p>
                    <ul class="skill-list">
                        <li>Hydrological dynamics of African river basins</li>
                        <li>Remote sensing technologies for water resource evaluation</li>
                        <li>Climate change impact assessment</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Work Experience -->
        <section class="section" id="experience">
            <h3 class="section-title">Work Experience</h3>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">January 2022 - February 2023</div>
                    <h4 class="timeline-title">Remote Sensing Intern</h4>
                    <p><strong>Organization:</strong> Institute of Geodesy and Cartography, Warsaw, Poland</p>
                    <ul class="skill-list">
                        <li>Land use land cover classification using Python API</li>
                        <li>Time series climate data analysis</li>
                        <li>Data visualization using R, Python, Tableau</li>
                        <li>Google Earth Engine implementation</li>
                    </ul>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">October 2018 - September 2020</div>
                    <h4 class="timeline-title">Graduate Assistant</h4>
                    <p><strong>Organization:</strong> Adigrat University, Ethiopia</p>
                    <ul class="skill-list">
                        <li>Undergraduate course instruction</li>
                        <li>Laboratory analysis coordination</li>
                        <li>Water quality assessment</li>
                        <li>Community service project management</li>
                    </ul>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">December 2013 - October 2018</div>
                    <h4 class="timeline-title">Senior Technical Assistant</h4>
                    <p><strong>Organization:</strong> Mekelle University, Ethiopia</p>
                    <ul class="skill-list">
                        <li>Research support for graduate students</li>
                        <li>Comprehensive environmental sample analysis</li>
                        <li>Laboratory management and quality control</li>
                        <li>Support for MSc and PhD research projects</li>
                    </ul>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">September 2005 - December 2013</div>
                    <h4 class="timeline-title">Natural Resource Manager</h4>
                    <p><strong>Organization:</strong> Adwa District Office of Agriculture</p>
                    <ul class="skill-list">
                        <li>Design and implementation of earth-fill dams</li>
                        <li>Water harvesting structure development</li>
                        <li>Gully rehabilitation projects</li>
                        <li>Community training programs</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Projects -->
        <section class="section" id="projects">
            <h3 class="section-title">Projects and Research</h3>
            <div class="project-grid">
                <div class="project-card">
                    <h4>Bamboo Propagation Project</h4>
                    <p><strong>Location:</strong> Gizgizia, Shire, Tigray, Ethiopia</p>
                    <ul class="skill-list">
                        <li>Species: Arudinaria Alpina</li>
                        <li>Type: Cutting test experiments</li>
                        <li>Results: Successful growth patterns recorded</li>
                    </ul>
                </div>

                <div class="project-card">
                    <h4>Biogas Plant Project</h4>
                    <ul class="skill-list">
                        <li>Design development and practical implementation</li>
                        <li>Energy demand assessment</li>
                        <li>Benefits: Electricity generation and cooking fuel provision</li>
                    </ul>
                </div>

                <div class="project-card">
                    <h4>Sediment Storage Dam Project (SSDam)</h4>
                    <ul class="skill-list">
                        <li>Technical design and construction oversight</li>
                        <li>Effectiveness monitoring</li>
                        <li>Impact Assessment: Soil erosion control measurements</li>
                    </ul>
                </div>

                <div class="project-card">
                    <h4>Integrated Watershed Management</h4>
                    <ul class="skill-list">
                        <li>Soil and water conservation implementation</li>
                        <li>Reforestation activities</li>
                        <li>Community engagement</li>
                        <li>Long-term sustainability assessment</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Publications -->
        <section class="section" id="publications">
            <h3 class="section-title">Publications and Contributions</h3>
            <ul class="publications-list">
                <li>
                    <h4>In Progress</h4>
                    <ul class="skill-list">
                        <li>4 MSc-level research manuscripts</li>
                        <li>BSc research manuscript</li>
                        <li>AMF research report</li>
                        <li>Cross-disciplinary agriculture project documentation</li>
                    </ul>
                </li>
                <li>
                    <h4>Acknowledgments</h4>
                    <ul class="skill-list">
                        <li>Credited in 12 academic articles for research contributions</li>
                        <li>Laboratory analysis acknowledgments</li>
                        <li>Field research contributions</li>
                    </ul>
                </li>
            </ul>
        </section>

        <!-- Awards -->
        <section class="section">
            <h3 class="section-title">Awards and Recognition</h3>
            <ul class="awards-list">
                <li>Full MSc Scholarship, NAWA Poland (2021-2024)</li>
                <li>Advanced Conformance Engineering Analytics Scholarship, ASQ USA (2022-2024)</li>
                <li>Full BSc Scholarship, Mekelle University (2014-2017)</li>
                <li>Gold Medal for Diploma Studies (4.0/4.0 GPA)</li>
                <li>Quality Engineer Certification (GPA 3.89)</li>
                <li>Competence Certificate in Natural Resource Conservation</li>
            </ul>
        </section>

        <!-- Languages -->
        <section class="section">
            <h3 class="section-title">Languages</h3>
            <div class="language-grid">
                <div class="language-card">
                    <div class="language-name">Tigrigna</div>
                    <div class="language-level">Native</div>
                </div>
                <div class="language-card">
                    <div class="language-name">Amharic</div>
                    <div class="language-level">Native</div>
                </div>
                <div class="language-card">
                    <div class="language-name">English</div>
                    <div class="language-level">Professional working proficiency</div>
                    <div class="language-details">
                        IELTS Overall: 6.5
                        (Writing: 6.5, Speaking: 6.5, Listening: 6.0, Reading: 6.5)
                    </div>
                </div>
                <div class="language-card">
                    <div class="language-name">Polish</div>
                    <div class="language-level">Basic</div>
                </div>
            </div>
        </section>

        <!-- Professional Development -->
        <section class="section">
            <h3 class="section-title">Professional Development</h3>
            <ul class="development-list">
                <li>Member of Environmental Engineering Society, Warsaw University of Technology</li>
                <li>Member of Mekelle University Ecological Organic Agriculture</li>
                <li>Member of Natural Resources Management Association, Ethiopia</li>
                <li>Regular participation in environmental workshops</li>
                <li>Active involvement in community initiatives</li>
                <li>Continuous professional education</li>
                <li>Skills enhancement training</li>
            </ul>
        </section>

        <!-- Extracurricular -->
        <section class="section">
            <h3 class="section-title">Extracurricular Activities</h3>
            <div class="extracurricular-grid">
                <div class="activity-card">
                    <h4>Sports</h4>
                    <ul class="skill-list">
                        <li>Athletics and martial arts (Wushu Kungfu, Karate)</li>
                        <li>Distance running and community racing</li>
                        <li>Cycling advocacy and group rides</li>
                        <li>Table tennis (university sports club)</li>
                    </ul>
                </div>
                <div class="activity-card">
                    <h4>Community Engagement</h4>
                    <ul class="skill-list">
                        <li>Environmental conservation volunteering</li>
                        <li>Community service leadership</li>
                        <li>Cultural engagement through international films</li>
                        <li>Biblical studies and science literature reading</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- References -->
        <section class="section">
            <h3 class="section-title">References</h3>
            <div class="references-grid">
                <div class="reference-card">
                    <div class="reference-name">Professor Jaroslaw Zawadzki</div>
                    <p>Warsaw University Technology</p>
                    <p>📧 jaroslaw.zawadzki@pw.edu.pl</p>
                    <p>📱 +48222347891</p>
                </div>
                <div class="reference-card">
                    <div class="reference-name">Dr.Eng. Piotr Fabijanczyk</div>
                    <p>Warsaw University of Technology</p>
                    <p>📧 piotr.fabijanczyk@pw.edu.pl</p>
                    <p>📱 +48736939787</p>
                </div>
                <div class="reference-card">
                    <div class="reference-name">Professor Yohannes Tesfay</div>
                    <p>Persimmon and Helios Engineering Solutions</p>
                    <p>📧 yohannesyebabe@gmail.com</p>
                    <p>📱 +1 (941) 2816819</p>
                </div>
            </div>
        </section>
    </div>

    <!-- Add a subtle footer -->
    <footer style="background: var(--primary-color); color: white; text-align: center; padding: 1rem 0; margin-top: 2rem;">
        <p>© 2024 Angesom Gebremariam. All rights reserved.</p>
    </footer>
</body>
</html>
