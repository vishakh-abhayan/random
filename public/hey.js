console.log("script loadin");
fetch("https://dinoipsum.com/api/?format=json&words=10&paragraphs=3")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Where did all the dinosaurs go?"));
