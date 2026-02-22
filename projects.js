const projectData = {
    "ecg": {
        title: "Hybrid Ensemble Learning Framework for ECG-Based Arrhythmia Detection",
        subtitle: "Multi-Model Ensemble Pipeline for High-Sensitivity Cardiac Diagnostics",
        github: "https://github.com/mariamabidi/ensemble-occlusion-detection.git",
        image: "images/ecg-architecture.png",
        report: "docs/ECG_Technical_Report.pdf",
        tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "XGBoost", "SVM", "Random Forest",
            "Neural Networks", "SMOTE"],
        structure: [
            "Preprocessed 10,646-patient ECG dataset from PhysioNet with 12-lead recordings (5,000 samples/lead at 500 Hz)",
            "Engineered 156 statistical features (mean, std, quartiles, skewness, kurtosis, RMS, energy) from ECG signals",
            "Integrated 7 clinical metadata parameters (age, gender, heart rates, QRS duration, QT intervals)",
            "Implemented 5 feature ranking methods: Random Forest importance, Mutual Information, Chi-Square, ANOVA, RFE",
            "Applied 5 aggregation techniques: Mean Rank, Mean Weight, Robust Rank Aggregation, Threshold Algorithm, MedRank",
            "Trained 13 diverse classifiers: ensemble methods (Random Forest, Gradient Boosting, AdaBoost, Bagging, Extra Trees), MLP, LDA, QDA, KNN, Decision Trees, and Naive Bayes variants",
            "Evaluated 78 model-feature combinations across stratified train-validation-test splits (72%-8%-20%)",
            "Optimized for clinical metrics: accuracy, sensitivity, specificity, F1-score, and model stability"
        ],
        evaluation: [
            "95.35% Test Accuracy (Stacking RF Ensemble)",
            "95.35% Sensitivity — minimizing missed arrhythmia cases",
            "95.90% Specificity — minimizing false alarms",
            "95.38% F1-Score — balanced across imbalanced classes",
            "38.7% Dimensionality Reduction with no performance loss via RRA",
            "14.7% Error Reduction over best single model through stacking"
        ]
},
    "brain-tumor": {
        title: "Brain Tumor Classification using ViT, SWIN & ResNet",
        subtitle: "Medical imaging pipeline for MRI scan classification.",
        github: "https://github.com/mariamabidi/medical-imaging",
        tech: ["PyTorch",
        "Vision Transformer (ViT)",
        "Swin Transformer",
        "Convolutional Neural Networks (CNN)",
        "MLflow",
        "Kubeflow Pipelines",
        "Docker",
        "Python"],
        structure: [ "Built an end-to-end deep learning pipeline to classify brain MRI scans into four categories: " +
            "Glioma, Meningioma, Pituitary, and Normal.",
            "The system includes data preprocessing and augmentation using Albumentations, model training with CNN, ViT, " +
                    "and Swin Transformer architectures in PyTorch, experiment tracking with MLflow, and automated " +
                "orchestration using Kubeflow Pipelines.",
        "Each pipeline component (data preprocessing, training, evaluation, and model registration) is containerized using Docker for scalable deployment."],
        evaluation: [
        "Achieved ~98% test accuracy on multi-class MRI classification.",
        "Compared CNN, ViT, and Swin Transformer architectures for performance and generalization.",
        "Integrated MLflow to log metrics, ROC curves, and model artifacts for reproducible experimentation.",
        "Automated the training-to-registration workflow using Kubeflow, reducing manual deployment effort.",
        "Currently exploring Retrieval-Augmented Generation (RAG) integration to enhance interpretability and contextual medical insights."
    ]
    },
    "pinn": {
        title: "PINN-Based Aerodynamic Flow Prediction",
        subtitle: "Modeling 3D aerodynamic velocity fields using physics-constrained deep learning.",
        github: "https://github.com/mariamabidi/PINN-Based-Flow-Prediction",
        image: "images/pinn1.jpeg",
        tech: ["Python", "PyTorch", "Physics-Informed Neural Networks", "Navier-Stokes Equations", "PyVista", "KMeans"],
        structure: [ "The model integrates the Navier-Stokes equations into the loss function as residual constraints, " +
            "enforcing conservation of momentum and mass during training. A deep neural network approximates velocity " +
            "and pressure fields, while an autoencoder compresses high-dimensional CFD data into a compact latent " +
            "representation for efficient learning. Flow visualization and analysis are performed using PyVista, and " +
            "unsupervised clustering is applied to identify dominant flow structures.",
            "Formulated Navier-Stokes residuals as physics-based loss terms.",
            "Trained a neural network to predict velocity and pressure fields simultaneously.",
            "Applied autoencoders for dimensionality reduction of CFD simulation outputs.",
            "Used KMeans clustering to identify coherent turbulent structures in wake regions.",
            "Validated predictions against CFD ground truth data."
        ],
        evaluation: [
            "Successfully modeled complex 3D flow around automotive geometries.",
            "KMeans clustering accurately identified turbulent wake regions.",
            "Achieved high-fidelity results with significantly lower computational cost than traditional CFD.",
            "Maintained physical consistency even with sparse training data.",
            "Demonstrated strong generalization across varying flow conditions."
        ]
},
    "ddos": {
        title: "Distributed DDoS Detection",
        subtitle: "Real-time attack mitigation using Random Forest and Docker Compose.",
        github: "https://github.com/mariamabidi/DDoS-Mitigation",
        tech: ["Python", "Scikit-Learn", "Docker", "Flask", "Pandas", "SMOTE"],
        structure: "The system features a distributed architecture where multiple capture nodes feed data into a containerized Random Forest model. Traffic features are extracted in real-time and passed through a Flask-based inference engine. If an attack is detected, automated blocklist updates are pushed to the edge nodes.",
        evaluation: [
            "Processed 30,000+ network packets with sub-second inference latency.",
            "SMOTE balancing improved detection of minority attack classes by 25%.",
            "Scalable containerized deployment allows for rapid response across large networks."
        ]
    },
    "ecommerce": {
        title: "Microservices E-Commerce System",
        subtitle: "Scalable Spring Boot architecture with JWT security.",
        github: "https://github.com/mariamabidi/Spring-boot-Microservices",
        tech: ["Java", "Spring Boot", "PostgreSQL", "OpenFeign", "Docker", "JWT"],
        structure: "Designed using a microservices pattern where services (Order, Inventory, Payment) communicate via OpenFeign. Security is handled at the gateway level using JWT and Spring Security, ensuring robust Role-Based Access Control (RBAC).",
        evaluation: [
            "Handled 20+ transactions per second during stress testing.",
            "Reduced API response time by 25% through service optimization.",
            "Achieved full CI/CD automation for seamless cloud deployment."
        ]
    },
    "inventory": {
        title: "Inventory Order Management System",
        subtitle: "Real-time processing using Redis Streams.",
        github: "https://github.com/mariamabidi/Order-Management-Site",
        tech: ["Redis", "MongoDB", "Node.js", "Redis Pub/Sub"],
        structure: "This system leverages Redis Streams as a message broker for order processing, ensuring that inventory levels are updated instantly across all instances. MongoDB serves as the persistent data store for historical order data.",
        evaluation: [
            "Reduced update latency by 50% compared to traditional polling.",
            "Improved system response time by 35% using Pub/Sub notifications.",
            "Maintained 99.9% data retrieval accuracy."
        ]
    },
    "glimpse": {
        title: "Glimpse: Virtual Exhibition Framework",
        subtitle: "Automating layout generation with Google Apps Script.",
        github: "https://github.com/monik6/glimpse-ve",
        tech: ["JavaScript", "Google Apps Script", "OAuth", "JSON", "HTML/XML"],
        structure: "Developed a framework that pulls data from Google Sheets/Forms via API to dynamically generate a 2D exhibition space. Used custom layout algorithms to automate the positioning of 'slides' based on user input.",
        evaluation: [
            "Cut development time for virtual exhibitions by 99%.",
            "Reduced data processing time by 40% using efficient JSON parsing.",
            "Won first place in the project competition for innovation and utility."
        ]
    }
};

// --- LOGIC TO FILL THE PAGE ---
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const data = projectData[id];

    if (data) {
        document.getElementById('proj-title').innerText = data.title;
        document.getElementById('proj-subtitle').innerText = data.subtitle;
        // --- Inside window.onload ---

        // Handle GitHub Link
        const githubBtn = document.getElementById('proj-github');
        if (data.github && data.github !== "#") {
            githubBtn.href = data.github;
            githubBtn.classList.remove('d-none');
        } else {
            githubBtn.classList.add('d-none');
        }

        // Handle Report Link
        const reportBtn = document.getElementById('proj-report');
        if (data.report) {
            reportBtn.href = data.report;
            reportBtn.classList.remove('d-none'); // Show it if report exists
        } else {
            reportBtn.classList.add('d-none'); // Hide it if no report
        }

        // Handle Tech Stack
        const techContainer = document.getElementById('proj-tech-stack');
        data.tech.forEach(t => {
            const span = document.createElement('span');
            span.className = "badge bg-secondary fs-6";
            span.innerText = t;
            techContainer.appendChild(span);
        });

        // Handle Structure (Now handles both strings and arrays)
        const structureContainer = document.getElementById('proj-structure');
        if (Array.isArray(data.structure)) {
            const ul = document.createElement('ul');
            ul.className = "list-unstyled mt-3";
            data.structure.forEach(point => {
                const li = document.createElement('li');
                li.className = "mb-3 text-muted";
                li.innerHTML = `<i class="fas fa-check-circle text-primary me-2"></i> ${point}`;
                ul.appendChild(li);
            });
            structureContainer.appendChild(ul);
        } else {
            structureContainer.innerText = data.structure;
        }

        if (data.image) {
            const diagramContainer = document.getElementById('proj-diagram');
            const imgElement = document.getElementById('proj-img');

            imgElement.src = data.image; // Set the image source
            diagramContainer.classList.remove('d-none'); // Show the container (remove Bootstrap's display: none)
        }

        // Evaluation List
        const evalContainer = document.getElementById('proj-evaluation');
        const ul = document.createElement('ul');
        data.evaluation.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>Result:</strong> ${item}`;
            ul.appendChild(li);
        });
        evalContainer.appendChild(ul);
    } else {
        document.getElementById('proj-title').innerText = "Project Not Found";
    }
};