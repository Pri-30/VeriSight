# VeriSight

## Image Authenticity Verification Platform

VeriSight is a web-based image authenticity verification platform designed to help users identify manipulated and AI-generated images. The project combines Error Level Analysis (ELA) with Machine Learning techniques to provide a simple and accessible way to assess image authenticity.

Developed as a hackathon MVP, VeriSight demonstrates how image forensics and machine learning can be used to improve digital trust in an era of rapidly growing AI-generated content.

---

## Live Demo

https://verisight-forge-guardian-main.vercel.app/

---

## Problem Statement

The rapid advancement of AI tools has made it easier than ever to generate realistic fake images and manipulated visual content. As a result, users often struggle to determine whether an image is authentic.

Without accessible verification tools, misinformation can spread quickly, reducing public trust and influencing opinions.

VeriSight addresses this challenge by providing a user-friendly platform that analyzes uploaded images and generates authenticity insights.

---

## Features

* Image Upload and Verification
* Error Level Analysis (ELA)
* Machine Learning-Based Classification
* Trust Score Generation
* AI-Generated Image Detection
* Authenticity Assessment Report
* Responsive User Interface
* Dark-Themed Modern Design

---

## How It Works

1. User uploads an image.
2. The image is processed using Error Level Analysis (ELA).
3. Compression inconsistencies and visual anomalies are identified.
4. A Machine Learning model analyzes image characteristics.
5. Results are combined to generate authenticity insights.
6. The user receives:

   * Trust Score
   * AI-Generation Probability
   * Authenticity Assessment
   * Supporting Analysis Information

---

## System Workflow

```text
User Uploads Image
        ↓
Frontend Interface
        ↓
Image Processing
        ↓
Error Level Analysis (ELA)
        ↓
Machine Learning Classification
        ↓
Authenticity Evaluation
        ↓
Trust Score & Results Dashboard
```

## Technology Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* HTML5
* CSS3

### Backend

* Vercel Serverless Functions
* Node.js

### Machine Learning

* Hugging Face Inference API
* Custom ML-Based Image Classification

### Deployment

* Vercel

---

## Project Architecture

```text
                User
                  │
                  ▼
        React Frontend (Vite)
                  │
                  ▼
          Image Upload Module
                  │
                  ▼
     Vercel Serverless Functions
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
 Error Level Analysis   ML Classification
        │                   │
        └─────────┬─────────┘
                  ▼
        Authenticity Evaluation
                  ▼
         Results & Trust Score
```

---

## Innovation

Unlike many solutions that rely solely on AI-generated content detection, VeriSight combines:

* Error Level Analysis (ELA)
* Machine Learning-Based Detection

ELA highlights image regions that show unusual compression behavior, helping reveal potential edits or manipulations.

This hybrid approach improves interpretability and reduces dependence on a single detection method.

---

## Challenges Faced

* Handling diverse image qualities and formats
* Interpreting ELA outputs accurately
* Integrating machine learning APIs efficiently
* Maintaining fast response times
* Balancing usability with technical analysis

---

## Project Status

### MVP (Minimum Viable Product)

VeriSight is currently a hackathon MVP developed to demonstrate the feasibility of image authenticity verification using ELA and Machine Learning.

Current limitations include:

* Limited training and testing datasets
* Prototype-level implementation
* Accuracy may vary across image types
* Intended primarily for demonstration and educational purposes

---

## Future Scope

Potential future improvements include:

* Larger training datasets
* Improved model accuracy
* Support for batch image processing
* Historical analysis reports
* User authentication
* Support for additional content types:

  * News Articles
  * Text Content
  * Video Content

---

## Team Matrix3

### Prisha Shekhawat

Project Manager & UI/UX

### Disha

UX Designer

### Kavyansh Upadhyay

Lead Developer

---

## Repository

GitHub Repository:
https://github.com/Pri-30/VeriSight

---

## License

This project was developed as part of a hackathon and is intended for educational and demonstration purposes.
