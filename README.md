# Module 1 Assignment: DevOps Engineering

**Student:** Saiful Rasel  
**Course:** DevOps Engineering  
**Module:** 1

---

# Part A: Theoretical Questions

## A1. What is DevOps Engineering? How does it differ from traditional development and operations roles?

DevOps Engineering combines development (Dev) and IT operations (Ops) through collaboration, automation, continuous feedback, and shared responsibility. Its goal is to deliver software quickly, reliably, and securely.

In traditional organizations, developers may focus mainly on writing code, while operations teams handle deployment and infrastructure separately. This separation can cause delays and communication problems.

DevOps encourages teams to work together and use practices such as version control, Continuous Integration (CI), Continuous Delivery (CD), automated testing, and monitoring.

**Example:** A CI/CD pipeline can automatically test code changes before they are deployed, reducing manual work and deployment errors.

## A2. How does DevOps fit into the Software Development Life Cycle (SDLC)?

DevOps improves the SDLC by connecting development, testing, deployment, operations, and feedback.

1. **Development:** Git and GitHub track code changes and support collaboration.
2. **Testing:** Automated tests and CI pipelines detect defects early.
3. **Deployment:** Automated deployment processes make releases more consistent.
4. **Operations and Monitoring:** Logs, metrics, and alerts help teams detect failures and maintain reliability.

DevOps supports continuous improvement throughout the SDLC rather than working in only one phase.

## A3. What values does a DevOps Engineer bring to an organization? Explain four values with examples.

**1. Faster Delivery:** Automation reduces the time needed to release software. For example, a pipeline can build and test every approved change.

**2. Reliability:** Testing and monitoring help detect problems early. For example, a failed automated test can prevent a faulty release.

**3. Collaboration:** Developers and operations engineers share responsibility. For example, a team can coordinate deployment activities in a shared communication channel.

**4. Continuous Improvement:** Teams learn from incidents and improve processes. For example, after an outage, a team can add a health check to detect similar failures sooner.

## A4. Why is prior Software Engineering (SWE) experience helpful before becoming a DevOps Engineer?

Software Engineering experience helps a DevOps Engineer understand application code, APIs, databases, dependencies, configuration, and runtime behavior.

This knowledge is useful when diagnosing application failures, building automation scripts, creating CI/CD pipelines, and supporting developers.

**Example:** If an application fails because a required environment variable is missing, software engineering knowledge helps the engineer understand how the application reads its configuration.

Prior SWE experience is helpful but not mandatory. Linux, networking, automation, security, and infrastructure knowledge are also important.

## A5. Why is networking knowledge important for DevOps roles?

Networking knowledge helps DevOps Engineers understand communication between clients, servers, applications, and external services.

- **DNS:** Resolves domain names to IP addresses. Incorrect DNS configuration can make a service unreachable by its domain.
- **Ports:** Identify network endpoints used by applications. For example, a local web server may listen on port 3000.
- **Protocols:** TCP provides reliable, ordered delivery, while UDP sends datagrams without the same built-in delivery guarantees.
- **IP addressing:** Identifies network interfaces and helps determine how traffic reaches a destination.

**Example:** If a website is unavailable, an engineer can check DNS resolution, server connectivity, listening ports, firewall rules, and application logs.

## A6. What soft skills are essential for a DevOps Engineer?

**Communication:** Helps engineers share incident updates, deployment plans, and technical findings clearly.

**Teamwork:** Encourages developers, testers, and operations engineers to solve problems together.

**Problem-solving:** Helps engineers investigate evidence, test possible causes, and identify root causes.

**Adaptability:** Helps engineers learn new technologies and respond to changing requirements.

During an incident, these skills help the team coordinate tasks, reduce confusion, and keep stakeholders informed.

## A7. Why are patience and a troubleshooting mindset important in DevOps? Give a real-life example.

Patience is important because a failure may have several possible causes. Making random changes can create additional problems.

A systematic troubleshooting process involves collecting evidence, checking logs, reviewing recent changes, testing one hypothesis at a time, and verifying the result.

**Example:** After a deployment, a web application becomes unavailable. The engineer checks service status and logs and discovers that a required environment variable is missing. After correcting the configuration, the engineer verifies the application and adds configuration validation to the deployment pipeline.

This approach fixes the immediate issue and reduces the chance of recurrence.

---

# Part B: Scenario-Based Questions

## B1. How would you onboard a new student unfamiliar with GitHub and cloud platforms?

I would use a structured onboarding process.

1. Assess the student's existing knowledge of Linux, Git, programming, and networking.
2. Share beginner-friendly documentation and official Git and GitHub learning resources.
3. Help the student install Git, create a GitHub account, configure Git, and authenticate securely.
4. Start with a practical task: create a repository, write a README, commit changes, and push them.
5. Introduce cloud concepts gradually, including compute, networking, storage, IAM, and billing.
6. Use a team chat for questions, documentation for instructions, and a task board to track progress.
7. Review the student's work and provide constructive feedback.

This approach makes learning organized, practical, and less overwhelming.

## B2. How would you troubleshoot an application outage during production deployment?

I would follow a systematic incident-response process.

1. **Confirm the incident:** Identify the affected service, severity, and user impact.
2. **Communicate:** Notify the responsible team and share verified information.
3. **Check recent changes:** Review deployment history and configuration changes.
4. **Inspect health:** Check service status, health endpoints, CPU, memory, disk, and network connectivity.
5. **Review evidence:** Examine application logs, metrics, error rates, and database connectivity.
6. **Mitigate:** If the release caused the issue, consider a verified rollback or another approved recovery action.
7. **Verify recovery:** Test the application and monitor errors and latency.
8. **Prevent recurrence:** Document the incident, identify the root cause, and create preventive actions.

The main priority is to restore service safely while communicating clearly.

## B3. How can DevOps balance frequent releases with system stability?

DevOps balances speed and reliability through automation, testing, controlled deployments, and monitoring.

- **CI/CD:** Automates build, test, and deployment steps.
- **Automated testing:** Detects regressions before release.
- **Code review:** Improves code quality and identifies risks.
- **Staging environments:** Allow teams to test changes before production.
- **Canary or blue-green deployments:** Reduce the impact of faulty releases.
- **Monitoring and alerts:** Detect performance and availability problems.
- **Rollback plans:** Support controlled recovery from failed deployments.
- **SLOs and error budgets:** Help teams balance release frequency with reliability goals.

These practices help teams deliver frequently without ignoring system stability.

## B4. How can communication platforms improve workflows for a distributed DevOps team?

Distributed teams need clear and timely communication.

A shared communication platform can provide dedicated channels for deployments, incidents, and technical questions. Documentation platforms can store runbooks and onboarding instructions, while task boards can track ownership and progress.

During an incident, the team should use a dedicated incident channel, assign responsibilities, share evidence, and post regular status updates.

Onboarding should explain which platform to use, how to report an incident, where to document decisions, and how to escalate urgent issues.

This reduces confusion and improves coordination across locations and time zones.

---

# Part C: Technical / Practical Tasks

## Task 1: Local DevOps Demo Application

**Objective:** Run and verify a simple application locally.

**Tools:** Ubuntu Linux, Node.js, Terminal, and a web browser.

**Application:** A Node.js HTTP server implemented in `app/server.js`.

**Command:**

```bash
node app/server.js
```

**Local URL:** `http://localhost:3000`

**Verification command:**

```bash
curl -i http://localhost:3000
```

**Expected result:** HTTP 200 OK and the demo application's HTML response.

**Why local execution helps DevOps:**

Running an application locally helps engineers validate functionality, test configuration, reproduce bugs, inspect logs, and identify problems before deployment. It provides quick feedback and reduces troubleshooting time.

**Screenshot evidence:**

![Local application](screenshots/01-local-app.png)

## Task 2: Exposing the Local Application Using ngrok

**Objective:** Temporarily expose the local application to the internet.

**Tool:** ngrok.

**Command:**

```bash
ngrok http 3000
```

**Actual public URL:** PENDING — replace this with the real HTTPS URL generated by ngrok.

**Verification:** Open the generated public URL in a browser and confirm that it displays the same application as `http://localhost:3000`.

**Real-world use case:** A developer can share a local application with a teammate or client for temporary testing without deploying it to a permanent server. ngrok can also help test external webhook integrations during development.

**Security note:** The tunnel is temporary and depends on the local server and ngrok session. Never expose passwords, secrets, or sensitive data.

**ngrok terminal screenshot:**

![ngrok tunnel](screenshots/02-ngrok-terminal.png)

**Public URL screenshot:**

![Public application URL](screenshots/03-ngrok-public-url.png)

---

# Conclusion

This assignment explains DevOps principles, collaboration, incident troubleshooting, local application testing, and temporary internet access using ngrok. It demonstrates how automation, monitoring, communication, and continuous improvement help teams deliver reliable software.

---

# Repository Information

Repository: https://github.com/Saiful-Rasel/assaignmet-1-ngrok

Practical verification and screenshots must be completed before submission.
