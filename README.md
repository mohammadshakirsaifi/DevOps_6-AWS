# Flask + Express Deployment on AWS

This repository contains a **Flask backend** and an **Express frontend** deployed on AWS using three approaches:  

1. Single EC2 instance (both apps together)  
2. Separate EC2 instances (backend and frontend separately)  
3. Dockerized deployment using AWS ECR, ECS, and VPC  

---

## **Project Structure**
```md
/flask-backend
├── app.py
├── requirements.txt
└── Dockerfile

/express-frontend
├── package.json
├── index.js
└── Dockerfile
```

---

## **1️⃣ Single EC2 Instance Deployment**

### Steps:
1. Launch EC2 instance (Ubuntu 22.04, t2.micro).  
2. Install Python3, pip, Node.js, and npm.  
3. Deploy Flask backend on port 5000.  
4. Deploy Express frontend on port 3000.  
5. Access apps via `http://<EC2_PUBLIC_IP>:5000` and `http://<EC2_PUBLIC_IP>:3000`.

### Screenshots:

**EC2 Dashboard**  
![EC2 Dashboard](screenshots/single-ec2-dashboard.png)

**Security Group Settings**  
![Security Group](screenshots/single-ec2-sg.png)

**SSH Connection**  
![SSH Terminal](screenshots/single-ec2-ssh.png)

**Flask Backend Running**  
![Flask Logs](screenshots/single-ec2-flask.png)

**Express Frontend Running**  
![Express Logs](screenshots/single-ec2-express.png)

**Browser Access**  
![App Access](screenshots/single-ec2-browser.png)

---

## **2️⃣ Separate EC2 Instances Deployment**

### Steps:
1. Launch two EC2 instances (backend & frontend).  
2. Configure security groups (5000 for Flask, 3000/80 for Express).  
3. Deploy backend and frontend separately.  
4. Update frontend to point to backend API IP.  
5. Test app functionality.

### Screenshots:

**EC2 Dashboard**  
![EC2 Dashboard](screenshots/separate-ec2-dashboard.png)

**Security Group Settings**  
![Security Group](screenshots/separate-ec2-sg.png)

**SSH Connections**  
![SSH Backend](screenshots/separate-ec2-ssh-backend.png)  
![SSH Frontend](screenshots/separate-ec2-ssh-frontend.png)

**Backend Running**  
![Flask Logs](screenshots/separate-ec2-flask.png)

**Frontend Running**  
![Express Logs](screenshots/separate-ec2-express.png)

**Browser Access**  
![App Access](screenshots/separate-ec2-browser.png)

---

## **3️⃣ Docker Deployment with ECR + ECS + VPC**

### Steps:
1. Dockerize Flask and Express apps.  
2. Push images to AWS ECR.  
3. Create VPC and ECS cluster.  
4. Deploy services using ECS task definitions.  
5. Access apps via ALB DNS or public IP.

### Screenshots:

**ECR Repositories**  
![ECR Repos](screenshots/ecr-repos.png)

**Docker Build & Push Logs**  
![Docker Push](screenshots/docker-build-push.png)

**VPC & Subnets**  
![VPC Setup](screenshots/vpc-setup.png)

**ECS Cluster**  
![ECS Cluster](screenshots/ecs-cluster.png)

**Task Definitions**  
![Task Definition](screenshots/ecs-task-def.png)

**Running Services**  
![ECS Services](screenshots/ecs-services.png)

**ALB / Browser Access**  
![ALB Access](screenshots/alb-access.png)

---

## **Application URLs (for submission)**

- **Single EC2:**  
  - Flask: `http://<EC2_IP>:5000`  
  - Express: `http://<EC2_IP>:3000`  

- **Separate EC2:**  
  - Frontend: `http://<Frontend_IP>:3000` → Calls Backend: `http://<Backend_IP>:5000`  

- **ECS / Docker:**  
  - Flask: `http://<ALB_DNS>/flask`  
  - Express: `http://<ALB_DNS>/express`

---

## **Notes / Cost Saving Tips**

- Stop EC2 instances when not testing to save cost.  
- Fargate free tier covers small workloads for ECS.  
- Use t2.micro/t3.micro instances for free-tier eligibility.

---

## **GitHub Repo**

[Your Repo Link Here](https://github.com/yourusername/aws-flask-express)
