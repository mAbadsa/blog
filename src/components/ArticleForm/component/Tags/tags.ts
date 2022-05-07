const tags = [
  {
    name: "javascript",
    rules_html:
      "\u003cp\u003eClient-side, server-side, it doesn't matter. This tag should be used for anything \u003cstrong\u003e\u003cem\u003eJavaScript\u003c/em\u003e\u003c/strong\u003e focused. If the topic is about a JavaScript \u003cem\u003eframework\u003c/em\u003e or \u003cem\u003elibrary\u003c/em\u003e, just remember to include the framework's tag as well.\u003c/p\u003e\n",
  },
  {
    name: "webdev",
    rules_html:
      "\u003cp\u003eBe nice.\u003cbr\u003e\nBe respectful.\u003cbr\u003e\nAssume best intentions.\u003cbr\u003e\nBe kind, rewind.\u003c/p\u003e\n",
  },
  {
    name: "beginners",
    rules_html:
      '\u003cp\u003e\u003ca href="https://dev.to/codemouse92/updated-beginner-tag-guidelines-1m2e"\u003eUPDATED AUGUST 2, 2019\u003c/a\u003e\u003c/p\u003e\n\n\u003cp\u003eThis tag is dedicated to beginners to programming, development, networking, or to a particular language. Everything should be geared towards that!\u003c/p\u003e\n\u003ch2\u003e\n  \u003ca href="#for-questions"\u003e\n  \u003c/a\u003e\n  For Questions...\n\u003c/h2\u003e\n\n\u003cp\u003eConsider using this tag along with #help, if... \u003c/p\u003e\n\n\u003cul\u003e\n\u003cli\u003e\u003cp\u003eYou are new to a language, or to programming in general,\u003c/p\u003e\u003c/li\u003e\n\u003cli\u003e\u003cp\u003eYou want an explanation with \u003cstrong\u003eNO\u003c/strong\u003e prerequisite knowledge required.\u003c/p\u003e\u003c/li\u003e\n\u003cli\u003e\u003cp\u003eYou want insight from more experienced developers.\u003c/p\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\n\u003cp\u003ePlease do \u003cem\u003enot\u003c/em\u003e use this tag if you are merely new to a tool, library, or framework.\u003c/p\u003e\n\n\u003cp\u003eSee also, \u003ca href="https://dev.to/t/explainlikeimfive"\u003e#explainlikeimfive\u003c/a\u003e\u003c/p\u003e\n\u003ch2\u003e\n  \u003ca href="#for-articles"\u003e\n  \u003c/a\u003e\n  For Articles...\n\u003c/h2\u003e\n\n\u003cul\u003e\n\u003cli\u003e\u003cp\u003ePosts should be \u003cstrong\u003especifically geared towards true beginners\u003c/strong\u003e (experience level 0-2 out of 10).\u003c/p\u003e\u003c/li\u003e\n\u003cli\u003e\u003cp\u003ePosts should require \u003cstrong\u003eNO\u003c/strong\u003e prerequisite knowledge, except perhaps general (language-agnostic) essentials of programming.\u003c/p\u003e\u003c/li\u003e\n\u003cli\u003e\u003cp\u003ePosts should \u003cem\u003eNOT\u003c/em\u003e merely be for beginners to a tool, library, or framework. \u003c/p\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\n\u003cp\u003eIf your article does not meet these qualifications, please select a different tag.\u003c/p\u003e\n\u003ch2\u003e\n  \u003ca href="#promotional-rules"\u003e\n  \u003c/a\u003e\n  Promotional Rules\n\u003c/h2\u003e\n\n\u003cul\u003e\n\u003cli\u003e\u003cp\u003ePosts \u003cstrong\u003eshould NOT\u003c/strong\u003e primarily promote an external work. This is what \u003ca href="https://dev.to/listings"\u003eListings\u003c/a\u003e is for.\u003c/p\u003e\u003c/li\u003e\n\u003cli\u003e\u003cp\u003eOtherwise accepable posts \u003cstrong\u003eMAY\u003c/strong\u003e include a brief (1-2 sentence) plug for another resource at the bottom.\u003c/p\u003e\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eResource lists \u003cstrong\u003eARE\u003c/strong\u003e acceptable if they follow these rules:\u003c/p\u003e\n\n\u003cul\u003e\n\u003cli\u003eInclude at least 3 distinct authors/creators.\u003c/li\u003e\n\u003cli\u003eClearly indicate which resources are FREE, which require PII, and which cost money.\u003c/li\u003e\n\u003cli\u003eDo not use personal affiliate links to monetize.\u003c/li\u003e\n\u003cli\u003eIndicate at the top that the article contains promotional links.\u003c/li\u003e\n\u003c/ul\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
  },
  { name: "programming", rules_html: null },
  {
    name: "tutorial",
    rules_html:
      "\u003cp\u003eTutorials should teach by example. \u003c/p\u003e\n\n\u003cp\u003eThis can include an interactive component or steps the reader can follow to understand.\u003c/p\u003e\n",
  },
  {
    name: "react",
    rules_html:
      '\u003cp\u003e1️⃣ Post Facebook\'s React ⚛ related posts/questions/discussion topics here~\u003c/p\u003e\n\n\u003cp\u003e2️⃣ There are no silly posts or questions as we all learn from each other👩‍🎓👨‍🎓\u003c/p\u003e\n\n\u003cp\u003e3️⃣ Adhere to dev.to 👩‍💻👨‍💻\u003ca href="https://dev.to/code-of-conduct"\u003eCode of Conduct\u003c/a\u003e\u003c/p\u003e\n',
  },
  {
    name: "python",
    rules_html:
      "\u003cp\u003eArticles and discussions should be directly related to the Python programming language.\u003c/p\u003e\n\n\u003cp\u003eQuestions are encouraged! (See the #help tag)\u003c/p\u003e\n",
  },
  {
    name: "productivity",
    rules_html:
      "\u003cp\u003ePlease check if your article contains information or discussion bases about productivity.\u003c/p\u003e\n\n\u003cp\u003eFrom posts with the tag #productivity we expect tips on how to use tools and software, process optimization, useful references, experience, and mindstate optimization.\u003cbr\u003e\nProductivity is a very broad term with many aspects and topics. From the color design of the office to personal rituals, anything can contribute to increase / optimize your own productivity or that of a team.\u003c/p\u003e\n",
  },
  {
    name: "opensource",
    rules_html:
      '\u003cp\u003e\u003ca href="https://dev.to/codemouse92/updated-opensource-tag-guidelines-55m5"\u003eUPDATED APRIL 8, 2020\u003c/a\u003e\u003c/p\u003e\n\n\u003cp\u003eTo keep this tag clean and meaningful, please ensure your post fits into at least one of the following categories:\u003c/p\u003e\n\n\u003cul\u003e\n\u003cli\u003e\u003cp\u003eOrganizing, managing, running, or working in an Open Source project.\u003c/p\u003e\u003c/li\u003e\n\u003cli\u003e\u003cp\u003eOpen Source philosophy, licensing, and/or practical and legal topics thereof.\u003c/p\u003e\u003c/li\u003e\n\u003cli\u003e\u003cp\u003eAdvocacy and adoption of Open Source philosophy.\u003c/p\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\n\u003cp\u003eDO NOT use this tag if you are simply using technologies which happen to be open source.\u003c/p\u003e\n\n\u003cp\u003eYou should NOT use this tag for any of the following:\u003c/p\u003e\n\n\u003cul\u003e\n\u003cli\u003e\u003cp\u003ePromoting open source projects, such as feature lists or announcements. (Use \u003ca href="https://dev.to/t/news"\u003e\u003ccode\u003e#news\u003c/code\u003e\u003c/a\u003e or \u003ca href="https://dev.to/listings"\u003eListings\u003c/a\u003e.)\u003c/p\u003e\u003c/li\u003e\n\u003cli\u003e\u003cp\u003eContributor requests. (Use \u003ca href="https://dev.to/t/contributorswanted"\u003e\u003ccode\u003e#contributorswanted\u003c/code\u003e\u003c/a\u003e or \u003ca href="https://dev.to/listings"\u003eListings\u003c/a\u003e.)\u003c/p\u003e\u003c/li\u003e\n\u003cli\u003e\u003cp\u003eTutorials/articles that happen to use an open source tool. (Use appropriate technology tags.)\u003c/p\u003e\u003c/li\u003e\n\u003cli\u003e\u003cp\u003eShowing off something you\'ve built that happens to be open source. (Use the \u003ca href="https://dev.to/t/showdev"\u003e#showdev\u003c/a\u003e tag.)\u003c/p\u003e\u003c/li\u003e\n\u003cli\u003e\u003cp\u003eSharing lists of open source projects. (Use \u003ca href="https://dev.to/t/githunt"\u003e\u003ccode\u003e#githunt\u003c/code\u003e\u003c/a\u003e or the appropriate technology tags.)\u003c/p\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\n\u003cp\u003eProjects must comply with the Open Source Definition (see below) to legally use the term "open source".\u003c/p\u003e\n\n\u003cp\u003eAs all "Free Software" officially complies with the standards of Open Source anyway, this tag covers both (collectively, FOSS).\u003c/p\u003e\n',
  },
  { name: "css", rules_html: null },
  {
    name: "devops",
    rules_html:
      "\u003cp\u003eBe nice.\u003cbr\u003e\nBe respectful.\u003cbr\u003e\nAssume best intentions.\u003cbr\u003e\nBe kind, rewind.\u003c/p\u003e\n",
  },
  { name: "html", rules_html: null },
  { name: "node", rules_html: null },
  { name: "codenewbie", rules_html: null },
  { name: "android", rules_html: null },
  {
    name: "career",
    rules_html:
      "\u003cp\u003eAll articles and discussions should relate to careers in some way. \u003c/p\u003e\n\n\u003cp\u003ePretty much everything on dev.to is about our careers in some way. Ideally, though, keep the tag related to getting, leaving, or maintaining a career or job.\u003c/p\u003e\n",
  },
  { name: "github", rules_html: null },
  {
    name: "discuss",
    rules_html:
      "\u003cp\u003eThese posts should be questions designed to elicit community responses.\u003c/p\u003e\n\n\u003cp\u003eIf it is more of a blog post, than a question it should not have this tag.\u003c/p\u003e\n\n\u003cp\u003eIf you would like to offer your own response to get the conversation going, it is best to leave it as a comment on the post, rather than the body of the post.\u003c/p\u003e\n",
  },
  {
    name: "aws",
    rules_html:
      "\u003cp\u003eArticles which primary focus is AWS are permitted to used the \u003cstrong\u003e#aws\u003c/strong\u003e tag.\u003c/p\u003e\n",
  },
  {
    name: "typescript",
    rules_html:
      "\u003cp\u003eClient-side, server-side, WASM, deno, it doesn't matter. This tag should be used for anything TypeScript focused.\u003c/p\u003e\n",
  },
  { name: "java", rules_html: null },
  {
    name: "php",
    rules_html:
      "\u003cp\u003eLet's please follow some simple, sensible guidelines:\u003c/p\u003e\n\n\u003cp\u003e✔ Posts should be directly related to the official PHP language, not FaceBook's Hack or some other dialect.\u003cbr\u003e\n✔ If you need very specific help (deploying Laravel on shared hosting, using mcrypt_decrypt, etc., Dev.to might not be the best platform)\u003cbr\u003e\n✔ Yes, PHP is an old tech with several flaws, but reiterating them doesn't help anyone.\u003cbr\u003e\n✔ Don't post a video/image or your projects without a proper introduction.\u003cbr\u003e\n✔ Always include relevant code snippets.\u003cbr\u003e\n✔ Arguing is encouraged; being an asshole is not!\u003c/p\u003e\n",
  },
  { name: "testing", rules_html: null },
  {
    name: "showdev",
    rules_html:
      "\u003cp\u003eFor showing off projects and launching products.\u003c/p\u003e\n\n\u003cp\u003ePlease make posts community-driven and not overly corporate or salesy.\u003c/p\u003e\n\n\u003cp\u003eTypically it is for showing off your thing or your company's thing. You can however, show off someone else's thing, but just make it clear it's theirs and not yours.\u003c/p\u003e\n\n\u003cp\u003eDon't just use this tag to share posts or tutorials your proud of — this is really for projects.\u003c/p\u003e\n",
  },
  {
    name: "linux",
    rules_html:
      '\u003cp\u003eArticles and discussions should be directly related to Linux operating systems. Questions are encouraged (see the \u003ca href="https://dev.to/t/help"\u003e#help\u003c/a\u003e tag).\u003c/p\u003e\n\n\u003cp\u003eContent with the main focus on bash or the Unix shell is permitted, but don\'t forget to add the \u003ca href="https://dev.to/t/bash"\u003e#bash\u003c/a\u003e or \u003ca href="https://dev.to/t/unix"\u003e#unix\u003c/a\u003e tag as you see it fitting.\u003c/p\u003e\n\n\u003cp\u003eArticles mainly about WSL should be tagged with \u003ca href="https://dev.to/t/wsl"\u003e#wsl\u003c/a\u003e instead of #linux.\u003c/p\u003e\n',
  },
  { name: "security", rules_html: null },
  { name: "vue", rules_html: null },
  { name: "angular", rules_html: null },
  {
    name: "docker",
    rules_html:
      "\u003cp\u003eAll docker-related stories are allowed, eg: security, docker-compose, images, commands or platform-specific issues. \u003c/p\u003e\n",
  },
  {
    name: "csharp",
    rules_html:
      '\u003cp\u003eArticles and discussions should be directly related to the C# programming language. (Not to be confused with C \u003ca href="https://dev.to/t/c"\u003e(#c)\u003c/a\u003e, C++ \u003ca href="https://dev.to/t/c"\u003e(#cpp)\u003c/a\u003e, or Objective C \u003ca href="https://dev.to/t/objectivec"\u003e(#objectivec)\u003c/a\u003e)\u003c/p\u003e\n\n\u003cp\u003e\u003cstrong\u003eQuestions are encouraged!\u003c/strong\u003e (See the \u003ca href="https://dev.to/t/help"\u003e#help\u003c/a\u003e tag)\u003c/p\u003e\n\n\u003cp\u003eBe careful when criticizing C# as a language or platform; most such complaints are old news. Criticisms \u003cstrong\u003eare\u003c/strong\u003e permitted, but please keep such discussions polite and objective.\u003c/p\u003e\n',
  },
  { name: "git", rules_html: null },
  {
    name: "machinelearning",
    rules_html:
      "\u003cp\u003eArticles and discussions should be directly related to the machine learning.\u003c/p\u003e\n\n\u003cp\u003eQuestions are encouraged! (See the #help tag)\u003c/p\u003e\n",
  },
  { name: "100daysofcode", rules_html: null },
  {
    name: "news",
    rules_html:
      '\u003cp\u003e\u003cstrong\u003eWhen to use this tag\u003c/strong\u003e:\u003c/p\u003e\n\n\u003cul\u003e\n\u003cli\u003enew service or product launched\u003c/li\u003e\n\u003cli\u003eservice, product, framework, library or language itself got updated (brief summary must be included as well as the source) \u003c/li\u003e\n\u003cli\u003ecovering broader tech industry/development news\u003c/li\u003e\n\u003c/ul\u003e\n\n\u003cp\u003e\u003cstrong\u003eWhen NOT to use this tag\u003c/strong\u003e:\u003c/p\u003e\n\n\u003cul\u003e\n\u003cli\u003egeneral news from media\u003c/li\u003e\n\u003cli\u003eto promote people\u003c/li\u003e\n\u003cli\u003epolitical posts\u003c/li\u003e\n\u003cli\u003eto talk about personal goals (for example "I started to meditate every morning to increase my productivity" is nothing for this tag). \u003c/li\u003e\n\u003c/ul\u003e\n',
  },
  {
    name: "cloud",
    rules_html:
      "\u003cp\u003eBe nice.\u003cbr\u003e\nBe respectful.\u003cbr\u003e\nAssume best intentions.\u003cbr\u003e\nBe kind, rewind.\u003c/p\u003e\n",
  },
  { name: "laravel", rules_html: null },
  { name: "dotnet", rules_html: null },
  {
    name: "go",
    rules_html:
      "\u003cp\u003eWrite! Just keep it clean and civil!\u003c/p\u003e\n",
  },
  {
    name: "database",
    rules_html:
      "\u003cp\u003eArticles should be related to database development, performance, scalability, optimisation or data analysis, or using sql to query data. \u003c/p\u003e\n",
  },
  {
    name: "datascience",
    rules_html:
      "\u003cp\u003eArticles and discussions should be directly related to the data science.\u003c/p\u003e\n\n\u003cp\u003eQuestions are encouraged! (See the #help tag)\u003c/p\u003e\n",
  },
  { name: "blockchain", rules_html: null },
  {
    name: "computerscience",
    rules_html:
      '\u003cp\u003ePlease ensure that any post that is tagged with #computerscience is related to computer science in some way. Promotional posts will be untagged, as will posts unrelated to CS.\u003c/p\u003e\n\n\u003cp\u003ePlease also be sure that your content adheres to the \u003ca href="https://dev.to/code-of-conduct"\u003eDEV Code of Conduct\u003c/a\u003e and that your comments are constructive and kind.\u003c/p\u003e\n',
  },
  {
    name: "ruby",
    rules_html:
      '\u003cp\u003eAll articles and discussions should be about the Ruby programming language and related frameworks and technologies like \u003ca href="https://dev.to/t/rails/"\u003eRails\u003c/a\u003e, \u003ca href="https://dev.to/t/hanami/"\u003eHanami\u003c/a\u003e, \u003ca href="https://dev.to/t/sinatra/"\u003eSinatra\u003c/a\u003e etc. Please also add the relevant library tags when making a post.\u003c/p\u003e\n\n\u003cp\u003e\u003cstrong\u003eQuestions are encouraged!\u003c/strong\u003e Including the \u003ca href="https://dev.to/t/help/"\u003e#help\u003c/a\u003e tag will make them easier to find.\u003c/p\u003e\n',
  },
  { name: "codepen", rules_html: null },
  {
    name: "ubuntu",
    rules_html:
      "\u003cp\u003eBe nice.\u003cbr\u003e\nBe respectful.\u003cbr\u003e\nAssume best intentions.\u003cbr\u003e\nBe kind, rewind.\u003c/p\u003e\n",
  },
  { name: "flutter", rules_html: null },
  {
    name: "algorithms",
    rules_html:
      "\u003cp\u003eNo Promotional Posts.\u003cbr\u003e\n No Spamming\u003c/p\u003e\n",
  },
  { name: "reactnative", rules_html: null },
  { name: "serverless", rules_html: null },
  { name: "mobile", rules_html: null },
  { name: "architecture", rules_html: null },
  { name: "rails", rules_html: null },
  { name: "kubernetes", rules_html: null },
  { name: "nextjs", rules_html: null },
  { name: "azure", rules_html: null },
  { name: "startup", rules_html: null },
  { name: "wordpress", rules_html: null },
  {
    name: "watercooler",
    rules_html:
      "\u003cp\u003eThis is a tag meant for slightly, or majorly offtopic subjects. Remember to keep things light, friendly and in-line with the code of conduct.\u003c/p\u003e\n",
  },
  {
    name: "help",
    rules_html:
      '\u003cp\u003eThis tag is to be used when you need to \u003cem\u003eask for help\u003c/em\u003e, not to share an article you think is \u003cem\u003ehelpful\u003c/em\u003e.\u003c/p\u003e\n\n\u003cp\u003ePlease review our \u003ca href="https://dev.to/devdrake0/help-has-had-a-makeover-3all"\u003ecommunity guidelines\u003c/a\u003e\u003c/p\u003e\n\n\u003cp\u003eWhen asking for help, please follow these rules:\u003c/p\u003e\n\n\u003cp\u003e\u003cstrong\u003eTitle:\u003c/strong\u003e\u003c/p\u003e\n\n\u003cul\u003e\n\u003cli\u003eWrite a clear, concise, title\u003c/li\u003e\n\u003c/ul\u003e\n\n\u003cp\u003e\u003cstrong\u003eBody:\u003c/strong\u003e\u003c/p\u003e\n\n\u003cul\u003e\n\u003cli\u003e\u003cp\u003eWhat is your question/issue (provide as much detail as possible)?\u003c/p\u003e\u003c/li\u003e\n\u003cli\u003e\u003cp\u003eWhat technologies are you using?\u003c/p\u003e\u003c/li\u003e\n\u003cli\u003e\u003cp\u003eWhat were you expecting to happen?\u003c/p\u003e\u003c/li\u003e\n\u003cli\u003e\u003cp\u003eWhat is actually happening?\u003c/p\u003e\u003c/li\u003e\n\u003cli\u003e\u003cp\u003eWhat have you already tried/thought about?\u003c/p\u003e\u003c/li\u003e\n\u003cli\u003e\u003cp\u003eWhat errors are you getting?\u003c/p\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\n\u003cp\u003ePlease try to avoid very broad "How do I make x" questions, unless you have used Google and there are no tutorials on the subject.\u003c/p\u003e\n',
  },
  { name: "vscode", rules_html: null },
  { name: "codequality", rules_html: null },
  { name: "motivation", rules_html: null },
  {
    name: "gamedev",
    rules_html:
      "\u003cp\u003eWrite! Just keep it clean and civil!\u003c/p\u003e\n",
  },
  {
    name: "ios",
    rules_html:
      '\u003cp\u003eAny post related to iOS is welcome here as long as it adheres to the dev.to \u003ca href="https://dev.to/code-of-conduct"\u003eCode of Conduct\u003c/a\u003e.\u003c/p\u003e\n\n\u003cp\u003e👇👇👇\u003c/p\u003e\n',
  },
  {
    name: "ux",
    rules_html:
      "\u003cp\u003eHave you tried a new approach to UX design? This is the tag for you to tell us all about it.\u003c/p\u003e\n",
  },
  {
    name: "django",
    rules_html:
      "\u003cp\u003eArticles on #django should be written for Django developers. An article's context should be about the said framework. Otherwise, use the respective tags.\u003c/p\u003e\n",
  },
  { name: "graphql", rules_html: null },
  {
    name: "cpp",
    rules_html:
      '\u003cp\u003eArticles and discussions should be directly related to the C++ programming language. (Not to be confused with C \u003ca href="https://dev.to/t/c"\u003e(#c)\u003c/a\u003e, Objective C \u003ca href="https://dev.to/t/objectivec"\u003e(#objectivec)\u003c/a\u003e, or C# \u003ca href="https://dev.to/t/csharp"\u003e(#csharp)\u003c/a\u003e)\u003c/p\u003e\n\n\u003cp\u003e\u003cstrong\u003eQuestions are encouraged!\u003c/strong\u003e (See the \u003ca href="https://dev.to/t/help"\u003e#help\u003c/a\u003e tag)\u003c/p\u003e\n\n\u003cp\u003eBe careful when criticizing C++ as a language or platform; most such complaints are old news. Criticisms \u003cstrong\u003eare\u003c/strong\u003e permitted, but please keep such discussions polite and objective.\u003c/p\u003e\n',
  },
  { name: "tailwindcss", rules_html: null },
  {
    name: "performance",
    rules_html:
      "\u003cp\u003eArticles should be obviously related to software performance in some way. Possible topics include, but are not limited to:\u003c/p\u003e\n\n\u003cul\u003e\n\u003cli\u003ePerformance Testing\u003c/li\u003e\n\u003cli\u003ePerformance Analysis\u003c/li\u003e\n\u003cli\u003eOptimising for performance\u003c/li\u003e\n\u003cli\u003eScalability\u003c/li\u003e\n\u003cli\u003eResilience\u003c/li\u003e\n\u003c/ul\u003e\n\n\u003cp\u003eBut most of all, be kind and humble. 💜\u003c/p\u003e\n",
  },
  {
    name: "rust",
    rules_html:
      '\u003cp\u003eAll articles and discussions should be about the Rust programming language and related frameworks and technologies. \u003c/p\u003e\n\n\u003cp\u003e\u003cstrong\u003eQuestions are encouraged!\u003c/strong\u003e Including the \u003ca href="https://dev.to/t/help/"\u003e#help\u003c/a\u003e tag will make them easier to find.\u003c/p\u003e\n',
  },
  { name: "bash", rules_html: null },
  {
    name: "ai",
    rules_html:
      "\u003cp\u003ePosts about artificial intelligence.\u003c/p\u003e\n",
  },
  { name: "functional", rules_html: null },
  {
    name: "devjournal",
    rules_html:
      '\u003cp\u003e\u003ca href="https://dev.to/codemouse92/introducing-devjournal-438e"\u003eUPDATED 30 AUG 2019\u003c/a\u003e\u003c/p\u003e\n\n\u003cp\u003ePosts should be about your own journey. The focus should be on what \u003cem\u003eyou\u003c/em\u003e tried, accomplished, learned, and/or plan to do.\u003c/p\u003e\n\n\u003cp\u003eSome good examples:\u003c/p\u003e\n\n\u003cul\u003e\n\u003cli\u003eWhat I learned last week\u003c/li\u003e\n\u003cli\u003eWeekly Goals\u003c/li\u003e\n\u003cli\u003eWeeknotes\u003c/li\u003e\n\u003cli\u003e10 Days as a Software Developer\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e\n  \u003ca href="#what-doesnt-belong"\u003e\n  \u003c/a\u003e\n  What Doesn\'t Belong\n\u003c/h2\u003e\n\n\u003cul\u003e\n\u003cli\u003ePosts NOT directly related to your experience.\u003c/li\u003e\n\u003cli\u003ePosts primarily promoting a project. (Tell us how you did it instead!)\u003c/li\u003e\n\u003cli\u003eQuestions (use \u003ccode\u003e#help\u003c/code\u003e.)\u003c/li\u003e\n\u003cli\u003eMost discussion prompts (use \u003ccode\u003e#discuss\u003c/code\u003e). Journaling prompts encouraged, however!\u003c/li\u003e\n\u003c/ul\u003e\n',
  },
  { name: "kotlin", rules_html: null },
  {
    name: "challenge",
    rules_html:
      "\u003cp\u003ePosts here should have a call to action which can be fulfilled via a comment. For example: \u003cstrong\u003eWrite a script to identify an anagram\u003c/strong\u003e\u003c/p\u003e\n\n\u003cp\u003eChallenge posts should present some sort of coding or technical problem. Solutions to the problem will be sent in via comments. \u003c/p\u003e\n",
  },
  {
    name: "sql",
    rules_html:
      '\u003cp\u003e\u003cstrong\u003eAllowed\u003c/strong\u003e\u003c/p\u003e\n\n\u003cul\u003e\n\u003cli\u003ePosts about learning SQL\u003c/li\u003e\n\u003cli\u003ePosts about tips, tricks, problems, and answers\u003c/li\u003e\n\u003cli\u003ePosts about news or commentary of the field\u003c/li\u003e\n\u003cli\u003ePosts about specific tooling or frameworks\u003c/li\u003e\n\u003c/ul\u003e\n\n\u003cp\u003e\u003cem\u003eThink what would someone wanting to learn more about SQL want to see.\u003c/em\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cstrong\u003eNot Allowed\u003c/strong\u003e\u003c/p\u003e\n\n\u003cul\u003e\n\u003cli\u003eArticles that mention SQL in passing\u003c/li\u003e\n\u003cli\u003eArticles that break the \u003ca href="https://dev.to/terms"\u003eterms of use\u003c/a\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
  },
  {
    name: "todayilearned",
    rules_html:
      "\u003cp\u003eNew to you today, help someone else out with a tidbit you learned.\u003c/p\u003e\n\n\u003cp\u003eNot for questions, or straight tutorials.\u003c/p\u003e\n",
  },
  { name: "npm", rules_html: null },
  { name: "archlinux", rules_html: null },
  { name: "hacktoberfest", rules_html: null },
  { name: "redux", rules_html: null },
  { name: "a11y", rules_html: null },
  { name: "mongodb", rules_html: null },
  {
    name: "oop",
    rules_html:
      "\u003cp\u003eArticles and discussions should be related to actual OOP concepts.\u003c/p\u003e\n\n\u003cp\u003eIf it is only related to a language which implements Object-Oriented Programming, see that language's tag.\u003c/p\u003e\n",
  },
  { name: "writing", rules_html: null },
  { name: "firebase", rules_html: null },
  {
    name: "postgres",
    rules_html:
      "\u003cp\u003eArticles should be related to Postgres development, performance, scalability, optimisation or analysis in some way. \u003c/p\u003e\n",
  },
  { name: "tooling", rules_html: null },
  { name: "swift", rules_html: null },
  { name: "analytics", rules_html: null },
  { name: "leadership", rules_html: null },
  {
    name: "elixir",
    rules_html:
      '\u003cp\u003eAll submissions should relate to Elixir in one way or another, this include things in the BEAM and OTP ecosystem, such as related languages like \u003ca href="https://github.com/erlang/otp"\u003eErlang\u003c/a\u003e, \u003ca href="https://github.com/lpil/gleam"\u003eGleam\u003c/a\u003e, or frameworks like \u003ca href="https://github.com/nerves-project"\u003eNerves\u003c/a\u003e, \u003ca href="https://github.com/phoenixframework/phoenix"\u003ePhoenix\u003c/a\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cstrong\u003eQuestions of all levels are encourged\u003c/strong\u003e, you may also add the \u003ccode\u003e#help\u003c/code\u003e tag for easier discovery.\u003c/p\u003e\n',
  },
  {
    name: "agile",
    rules_html:
      "\u003cp\u003eArticles and discussions should be directly related to the agile process.\u003c/p\u003e\n\n\u003cp\u003eQuestions are encouraged! (See the #help tag)\u003c/p\u003e\n",
  },
  {
    name: "svelte",
    rules_html:
      "\u003cp\u003eGuidelines as of 14th Oct 2019\u003c/p\u003e\n\n\u003cp\u003e1- All posts must be clearly related to Svelte. If you only make a passing comment, avoid using the tag.\u003c/p\u003e\n\n\u003cp\u003e2- You needn't be a master of the framework in order to post. Any level of knowledge and skill is acceptable.\u003c/p\u003e\n\n\u003cp\u003e3- Feel free to post all sorts of stuff (tutorials, questions, thoughts, critiques, etc.) as long as you stay on topic.\u003c/p\u003e\n",
  },
  { name: "podcast", rules_html: null },
  { name: "dart", rules_html: null },
  {
    name: "c",
    rules_html:
      '\u003cp\u003eArticles and discussions should be directly related to the C programming language. (Not to be confused with C++ \u003ca href="https://dev.to/t/cpp"\u003e(#cpp)\u003c/a\u003e, Objective C \u003ca href="https://dev.to/t/objectivec"\u003e(#objectivec)\u003c/a\u003e, or C# \u003ca href="https://dev.to/t/csharp"\u003e(#csharp)\u003c/a\u003e.)\u003c/p\u003e\n\n\u003cp\u003e\u003cstrong\u003eQuestions are encouraged!\u003c/strong\u003e (See the \u003ca href="https://dev.to/t/help"\u003e#help\u003c/a\u003e tag)\u003c/p\u003e\n\n\u003cp\u003eBe careful when criticizing C as a language or platform; most such complaints are old news. Criticisms \u003cstrong\u003eare\u003c/strong\u003e permitted, but please keep such discussions polite and objective.\u003c/p\u003e\n',
  },
  { name: "spanish", rules_html: null },
];

export default tags;
