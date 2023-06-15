const questions = [
  /* Category 1 Catfishing */
  {
    prompt: 'Question 1: How can someone protect themselves from catfishing?',
    options: ['A) Avoid using social media platforms',
      'B) Only accept friend requests from verified accounts',
      'C) Share personal information with new online friends',
      'D) Be cautious and skeptical of online interactions'],
    correctAnswer: 'D) Be cautious and skeptical of online interactions',
    cashPrize: 100
  },
  {
    prompt: 'Question 2: What is the main goal of catfishing?',
    options: ['A) Gaining popularity on social media',
      'B) Making new friends online',
      'C) Sharing personal stories anonymously',
      'D) Tricking people into friending or sharing personal information'],
    correctAnswer: 'D) Tricking people into friending or sharing personal information',
    cashPrize: 200
  },
  {
    prompt: 'Question 3: What does catfishing involve?',
    options: ['A) Sharing personal information online',
      'B) Creating a fake identity or account online',
      'C) Falling for online scams',
      'D) Blocking people on social media'],
    correctAnswer: 'B) Creating a fake identity or account online',
    cashPrize: 300
  },
  {
    prompt: 'Question 4: Which of the following is a common platform for catfishing?',
    options: ['A) Online gaming communities',
      'B) E-commerce websites',
      'C) Professional networking sites',
      'D) Social media platforms'],
    correctAnswer: 'D) Social media platforms',
    cashPrize: 400
  },
  {
    prompt: 'Question 5: What is an example of a technique used by catfishers to deceive others and create a false identity online?',
    options: ['A) Social engineering and manipulation tactics',
      'B) SQL injection and cross-site scripting attacks',
      'C) Advanced encryption algorithms and key exchange protocols',
      'D) Reverse engineering and code obfuscation techniques'],
    correctAnswer: 'A) Social engineering and manipulation tactics',
    cashPrize: 500
  },
  /* Category 2 Phishing */
  {
    prompt: 'Question 1: What is the main goal of phishing?',
    options: ['A) Spreading malware on the internet',
      'B) Creating fake social media accounts',
      'C) Scamming or tricking people into sharing personal information',
      'D) Generating website traffic'],
    correctAnswer: 'C) Scamming or tricking people into sharing personal information',
    cashPrize: 100
  },
  {
    prompt: 'Question 2: Which of the following methods is commonly used in phishing attacks?',
    options: ['A) Sending physical letters',
      'B) Making phone calls',
      'C) Sending deceptive emails',
      'D) Distributing flyers in public places'],
    correctAnswer: 'C) Sending deceptive emails',
    cashPrize: 200
  },
  {
    prompt: 'Question 3: When you receive a suspicious email asking for personal information, which action should you avoid to minimize the risk of falling victim to a sophisticated phishing attack?',
    options: ['A) Verifying the sender\'s identity through a secondary channel before responding',
      'B) Forwarding the email to a trusted cybersecurity expert for analysis',
      'C) Ignoring the email and taking no action',
      'D) Clicking on any links or downloading attachments within the email'],
    correctAnswer: 'D) Clicking on any links or downloading attachments within the email',
    cashPrize: 300
  },
  {
    prompt: 'Question 4: Which one is more effective strategy to protect yourself from sophisticated phishing attacks and enhance your online security?',
    options: ['A) Implementing robust email filtering and anti-phishing solutions',
      'B) Enabling two-factor authentication for all your online accounts',
      'C) Restricting access to personal information on social media platforms',
      'D) Regularly updating your antivirus software and performing system scans'],
    correctAnswer: 'B) Enabling two-factor authentication for all your online accounts',
    cashPrize: 400
  },
  {
    prompt: 'Question 5: What is a common method used by phishers to make a phishing website appear legitimate?',
    options: ['A) Cross-site scripting attacks',
      'B) Social engineering techniques',
      'C) Domain spoofing and URL obfuscation',
      'D) SQL injection vulnerabilities'],
    correctAnswer: 'C) Domain spoofing and URL obfuscation',
    cashPrize: 500
  },

  /* Category 3 Smishing */
  {
    prompt: 'Question 1: What communication method is used in smishing attacks?',
    options: ['A) Phone calls',
      'B) Email',
      'C) Text messages',
      'D) Video calls'],
    correctAnswer: 'C) Text messages',
    cashPrize: 100
  },
  {
    prompt: 'Question 2: What is the typical goal of a smishing attack?',
    options: ['A) Installing harmful software on your device',
      'B) Tracking your online activities',
      'C) Trick you into sharing personal or login information',
      'D) Sending spam messages to your contacts'],
    correctAnswer: 'C) Trick you into sharing personal or login information',
    cashPrize: 200
  },
  {
    prompt: 'Question 3: How can you identify a smishing message?',
    options: ['A) The message contains numerous spelling mistakes',
      'B) It asks for personal information via a text message',
      'C) The sender\'s phone number is unfamiliar',
      'D) The message is unusually short'],
    correctAnswer: 'B) It asks for personal information via a text message',
    cashPrize: 300
  },
  {
    prompt: 'Question 4: In order to protect yourself from the growing threat of smishing attacks, which strategy should you prioritize?',
    options: ['A) Restricting the sharing of personal information on social media platforms',
      'B) Avoiding clicking on links or providing sensitive information in response to text messages',
      'C) Disabling all notifications and alerts on your mobile device',
      'D) Deleting all text messages from unknown senders without reading them'],
    correctAnswer: 'B) Avoiding clicking on links or providing sensitive information in response to text messages',
    cashPrize: 400
  },
  {
    prompt: 'Question 5: How can smishers exploit vulnerabilities in mobile devices to carry out their attacks?',
    options: ['A) By exploiting operating system vulnerabilities to install malware',
      'B) By intercepting and manipulating SMS messages in transit',
      'C) By leveraging insecure Wi-Fi networks to capture sensitive information',
      'D) By utilizing fake apps or links in text messages to deceive users'],
    correctAnswer: 'D) By utilizing fake apps or links in text messages to deceive users',
    cashPrize: 500
  },
  /* Category 4 Spearphishing phishing */
  {
    prompt: 'Question 1: What distinguishes spearphishing from traditional phishing attacks?',
    options: ['A) Spearphishing uses more sophisticated techniques',
      'B) Spearphishing targets a wider audience',
      'C) Spearphishing relies on social engineering only',
      'D) Spearphishing exclusively uses email as a communication method'],
    correctAnswer: 'A) Spearphishing uses more sophisticated techniques',
    cashPrize: 100
  },
  {
    prompt: 'Question 2: What precautionary measure can help mitigate spearphishing attacks?',
    options: ['A) Avoid sharing personal information online',
      'B) Disable spam filters in email accounts',
      'C) Regularly delete emails without reading them',
      'D) Accept all friend requests on social media'],
    correctAnswer: 'A) Avoid sharing personal information online',
    cashPrize: 200
  },
  {
    prompt: 'Question 3: Identify the example of a sophisticated spearphishing scenario that leverages targeted information and social engineering techniques to deceive the victim and obtain sensitive data.',
    options: ['A) Receiving a generic email from a financial institution',
      'B) Clicking on a suspicious link on a website',
      'C) Getting an email claiming to be from your bank, mentioning your recent transactions, and asking you to verify your account details',
      'D) Ignoring a friend request from an unfamiliar profile on social media'],
    correctAnswer: 'C) Getting an email claiming to be from your bank, mentioning your recent transactions, and asking you to verify your account details',
    cashPrize: 300
  },

  {
    prompt: 'Question 4: How can attackers gather personal information for spearphishing attacks?',
    options: ['A) Through brute force attacks on online accounts',
      'B) By monitoring network traffic and capturing sensitive data',
      'C) By researching targets and collecting publicly available information',
      'D) By conducting phishing attacks on a large scale'],
    correctAnswer: 'C) By researching targets and collecting publicly available information',
    cashPrize: 400
  },
  {
    prompt: 'Question 5: In spearphishing attacks, attackers employ a prevalent technique to establish trust with their targets. What is this technique?',
    options: ['A) Utilizing sophisticated social engineering and personalized messages',
      'B) Executing coordinated distributed denial-of-service (DDoS) attacks',
      'C) Carrying out complex man-in-the-middle (MitM) attacks',
      'D) Exploiting newly discovered zero-day vulnerabilities in software'],
    correctAnswer: 'A) Utilizing sophisticated social engineering and personalized messages',
    cashPrize: 500
  },
  /* Category 5 Clickbait */
  {
    prompt: 'Question 1: What is the primary objective of using clickbait?',
    options: ['A) Distributing malicious software',
      'B) Increasing website traffic and engagement',
      'C) Promoting online privacy awareness',
      'D) Disclosing sensitive personal information'],
    correctAnswer: 'B) Increasing website traffic and engagement',
    cashPrize: 100
  },
  {
    prompt: 'Question 2: How does clickbait content typically lure users?',
    options: ['A) By providing accurate and unbiased information',
      'B) By using sensational headlines or catchy phrases',
      'C) By displaying explicit content',
      'D) By offering financial rewards'],
    correctAnswer: 'B) By using sensational headlines or catchy phrases',
    cashPrize: 200
  },
  {
    prompt: 'Question 3: What should users be cautious of when encountering clickbait?',
    options: ['A) Clicking on links without verifying their legitimacy',
      'B) Trusting information provided by reputable sources',
      'C) Sharing clickbait content with friends',
      'D) Reporting clickbait websites to the authorities'],
    correctAnswer: 'A) Clicking on links without verifying their legitimacy',
    cashPrize: 300
  },
  {
    prompt: 'Question 4: How can you protect yourself from falling for clickbait?',
    options: ['A) Verify the credibility of the source before clicking on a link',
      'B) Avoid all online content that seems interesting',
      'C) Enable ad-blockers in your web browser',
      'D) Share clickbait content on social media to warn others'],
    correctAnswer: 'A) Verify the credibility of the source before clicking on a link',
    cashPrize: 400
  },
  {
    prompt: 'Question 5: What is a common tactic used by clickbait creators to generate more clicks and engagement?',
    options: ['A) Utilizing sensationalized headlines and misleading thumbnail images',
      'B) Implementing advanced search engine optimization techniques',
      'C) Employing machine learning algorithms to analyze user preferences',
      'D) Targeting specific demographics with personalized content'],
    correctAnswer: 'A) Utilizing sensationalized headlines and misleading thumbnail images',
    cashPrize: 500
  }
];

export default questions;