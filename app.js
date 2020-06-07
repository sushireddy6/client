const getPatrons = async () => {
  var resultElement = document.getElementById('getResult');
  try {
    console.log("hello");
    const res = await axios.get(`http://localhost:8040/api/patrons`);

    const patrons = res.data;

    console.log(`GET: Here's the list of Patrons`, patrons);
    resultElement.innerHTML = JSON.stringify(patrons);

    return patrons;
  } catch (e) {
    console.error(e);
  }
} 