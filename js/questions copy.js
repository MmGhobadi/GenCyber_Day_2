const questions = [
  /* Category 1 Questions */
  {
    prompt: 'Question 1: What does catfishing involve?',
    options: ['A) Sharing personal information online',
    'B) Creating a fake identity or account online',
    'C) Falling for online scams',
    'D) Blocking people on social media'],
    correctAnswer: 'B) Creating a fake identity or account online',
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
    prompt: 'Question 3: Which of the following is a common platform for catfishing?',
    options: ['A) Online gaming communities',
    'B) E-commerce websites',
    'C) Professional networking sites',
    'D) Social media platforms'],
    correctAnswer: 'D) Social media platforms',
    cashPrize: 300
    },
    {
    prompt: 'Question 4: What is the purpose of creating a fake identity in catfishing?',
    options: ['A) To explore different online personas',
    'B) To maintain anonymity online',
    'C) To deceive hackers',
    'D) To promote digital privacy'],
    correctAnswer: 'B) To maintain anonymity online',
    cashPrize: 400
    },
    {
    prompt: 'Question 5: How can someone protect themselves from catfishing?',
    options: ['A) Avoid using social media platforms',
    'B) Only accept friend requests from verified accounts',
    'C) Share personal information with new online friends',
    'D) Be cautious and skeptical of online interactions'],
    correctAnswer: 'D) Be cautious and skeptical of online interactions',
    cashPrize: 500
    },
    {
    prompt: 'Question 6: What is an example of a technique used by catfishers to deceive others and create a false identity online?',
    options: ['A) Social engineering and manipulation tactics',
    'B) SQL injection and cross-site scripting attacks',
    'C) Advanced encryption algorithms and key exchange protocols',
    'D) Reverse engineering and code obfuscation techniques'],
    correctAnswer: 'A) Social engineering and manipulation tactics',
    cashPrize: 100
    },
    {
    prompt: 'Question 7: In the context of catfishing, what is "sockpuppeting"?',
    options: ['A) Using a virtual private network (VPN) to hide one\'s identity',
    'B) Creating multiple fake accounts to support a false identity or viewpoint',
    'C) Modifying metadata in digital photos to deceive others',
    'D) Utilizing steganography to embed secret messages in images or files'],
    correctAnswer: 'B) Creating multiple fake accounts to support a false identity or viewpoint',
    cashPrize: 100
    },
  /* Category 2 Questions */
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
    cashPrize: 100
    },
    {
    prompt: 'Question 3: How can you identify a phishing email?',
    options: ['A) It contains personal greetings',
    'B) The sender\'s email address looks suspicious',
    'C) It is written in formal language',
    'D) It does not mention any personal information'],
    correctAnswer: 'B) The sender\'s email address looks suspicious',
    cashPrize: 100
    },
    {
    prompt: 'Question 4: What should you do if you receive a suspicious email asking for personal information?',
    options: ['A) Reply with the requested information',
    'B) Forward the email to all your contacts',
    'C) Click on any links within the email',
    'D) Delete the email without responding'],
    correctAnswer: 'D) Delete the email without responding',
    cashPrize: 100
    },
    {
    prompt: 'Question 5: How can you protect yourself from phishing attacks?',
    options: ['A) Avoid using email or social media platforms',
    'B) Disable antivirus software',
    'C) Regularly update your password on all online accounts',
    'D) Share personal information with trustworthy sources'],
    correctAnswer: 'C) Regularly update your password on all online accounts',
    cashPrize: 100
    },
    {
    prompt: 'Question 6: What is a common method used by phishers to make a phishing website appear legitimate?',
    options: ['A) Cross-site scripting attacks',
    'B) Social engineering techniques',
    'C) Domain spoofing and URL obfuscation',
    'D) SQL injection vulnerabilities'],
    correctAnswer: 'C) Domain spoofing and URL obfuscation',
    cashPrize: 100
    },
    {
    prompt: 'Question 7: What is the purpose of a "homograph attack" in phishing?',
    options: ['A) Manipulating search engine results to promote phishing websites',
    'B) Creating convincing fake login pages to steal user credentials',
    'C) Leveraging zero-day exploits to bypass security measures',
    'D) Conducting large-scale spam email campaigns'],
    correctAnswer: 'B) Creating convincing fake login pages to steal user credentials',
    cashPrize: 100
    },
  /* Category 3 Questions */
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
    cashPrize: 100
    },
    {
    prompt: 'Question 3: How can you identify a smishing message?',
    options: ['A) The message contains numerous spelling mistakes',
    'B) It asks for personal information via a text message',
    'C) The sender\'s phone number is unfamiliar',
    'D) The message is unusually short'],
    correctAnswer: 'B) It asks for personal information via a text message',
    cashPrize: 100
    },
    {
    prompt: 'Question 4: What should you do if you receive a suspicious text message asking for personal information?',
    options: ['A) Reply with the requested information',
    'B) Call the number provided in the message to verify its legitimacy',
    'C) Report the message as spam to your phone carrier',
    'D) Delete the message without responding'],
    correctAnswer: 'D) Delete the message without responding',
    cashPrize: 100
    },
    {
    prompt: 'Question 5: How can you protect yourself from smishing attacks?',
    options: ['A) Enable two-factor authentication on your online accounts',
    'B) Share your phone number with online strangers',
    'C) Respond to all text messages, even from unknown senders',
    'D) Avoid using your mobile device for online activities'],
    correctAnswer: 'A) Enable two-factor authentication on your online accounts',
    cashPrize: 100
    },
    {
    prompt: 'Question 6: What is a common technique used by smishers to deceive users in text message-based attacks?',
    options: ['A) Social engineering and psychological manipulation',
    'B) Buffer overflow attacks',
    'C) Distributed denial-of-service (DDoS) attacks',
    'D) Man-in-the-middle (MitM) attacks'],
    correctAnswer: 'A) Social engineering and psychological manipulation',
    cashPrize: 100
    },
    {
    prompt: 'Question 7: How can smishers exploit vulnerabilities in mobile devices to carry out their attacks?',
    options: ['A) By exploiting operating system vulnerabilities to install malware',
    'B) By intercepting and manipulating SMS messages in transit',
    'C) By leveraging insecure Wi-Fi networks to capture sensitive information',
    'D) By utilizing fake apps or links in text messages to deceive users'],
    correctAnswer: 'D) By utilizing fake apps or links in text messages to deceive users',
    cashPrize: 100
    },
  /* Category 4 Questions */
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
    prompt: 'Question 2: How do attackers gather personal information for spearphishing attacks?',
    options: ['A) Through online surveys and questionnaires',
    'B) By monitoring social media activity',
    'C) By impersonating trusted organizations',
    'D) Through online job applications'],
    correctAnswer: 'B) By monitoring social media activity',
    cashPrize: 100
    },
    {
    prompt: 'Question 3: What is the primary purpose of using the victim\'s personal information in spearphishing?',
    options: ['A) To launch large-scale malware attacks',
    'B) To gain unauthorized access to online accounts',
    'C) To create a fake identity for the attacker',
    'D) To blackmail the victim'],
    correctAnswer: 'B) To gain unauthorized access to online accounts',
    cashPrize: 100
    },
    {
    prompt: 'Question 4: What precautionary measure can help mitigate spearphishing attacks?',
    options: ['A) Avoid sharing personal information online',
    'B) Disable spam filters in email accounts',
    'C) Regularly delete emails without reading them',
    'D) Accept all friend requests on social media'],
    correctAnswer: 'A) Avoid sharing personal information online',
    cashPrize: 100
    },
    {
    prompt: 'Question 5: Which of the following is an example of a spearphishing scenario?',
    options: ['A) Receiving a generic email from a financial institution',
    'B) Clicking on a suspicious link on a website',
    'C) Getting an email claiming to be from your bank, mentioning your recent transactions, and asking you to verify your account details',
    'D) Ignoring a friend request from an unfamiliar profile on social media'],
    correctAnswer: 'C) Getting an email claiming to be from your bank, mentioning your recent transactions, and asking you to verify your account details',
    cashPrize: 100
    },
    {
    prompt: 'Question 6: What is a common technique used by attackers in spearphishing to gain the trust of their targets?',
    options: ['A) Social engineering and personalization of messages',
    'B) Distributed denial-of-service (DDoS) attacks',
    'C) Man-in-the-middle (MitM) attacks',
    'D) Exploiting zero-day vulnerabilities in software'],
    correctAnswer: 'A) Social engineering and personalization of messages',
    cashPrize: 100
    },
    {
    prompt: 'Question 7: How can attackers gather personal information for spearphishing attacks?',
    options: ['A) Through brute force attacks on online accounts',
    'B) By monitoring network traffic and capturing sensitive data',
    'C) By researching targets and collecting publicly available information',
    'D) By conducting phishing attacks on a large scale'],
    correctAnswer: 'C) By researching targets and collecting publicly available information',
    cashPrize: 100
    },
  /* Category 5 Questions */
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
    cashPrize: 100
    },
    {
    prompt: 'Question 3: Which online platforms often utilize clickbait techniques?',
    options: ['A) Educational websites',
    'B) Online shopping websites',
    'C) Government websites',
    'D) News websites'],
    correctAnswer: 'D) News websites',
    cashPrize: 100
    },
    {
    prompt: 'Question 4: What should users be cautious of when encountering clickbait?',
    options: ['A) Clicking on links without verifying their legitimacy',
    'B) Trusting information provided by reputable sources',
    'C) Sharing clickbait content with friends',
    'D) Reporting clickbait websites to the authorities'],
    correctAnswer: 'A) Clicking on links without verifying their legitimacy',
    cashPrize: 100
    },
    {
    prompt: 'Question 5: How can you protect yourself from falling for clickbait?',
    options: ['A) Avoid all online content that seems interesting',
    'B) Enable ad-blockers in your web browser',
    'C) Verify the credibility of the source before clicking on a link',
    'D) Share clickbait content on social media to warn others'],
    correctAnswer: 'C) Verify the credibility of the source before clicking on a link',
    cashPrize: 100
    },
    {
    prompt: 'Question 6: What is a common tactic used by clickbait creators to generate more clicks and engagement?',
    options: ['A) Utilizing sensationalized headlines and misleading thumbnail images',
    'B) Implementing advanced search engine optimization techniques',
    'C) Employing machine learning algorithms to analyze user preferences',
    'D) Targeting specific demographics with personalized content'],
    correctAnswer: 'A) Utilizing sensationalized headlines and misleading thumbnail images',
    cashPrize: 100
    },
    {
    prompt: 'Question 7: How can clickbait creators monetize their content?',
    options: ['A) By selling user data to third-party advertisers',
    'B) Through affiliate marketing programs and sponsored content',
    'C) By displaying intrusive pop-up ads on their website',
    'D) Implementing pay-per-click advertising models'],
    correctAnswer: 'B) Through affiliate marketing programs and sponsored content',
    cashPrize: 100
    }
];

export default questions;