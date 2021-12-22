
      function display(val) {
        document.getElementById("textval").value += val;
      }
      
      function calc() {
        let x = document.getElementById("textval").value;
        let y = eval(x);
        document.getElementById("textval").value = eval(x)
      }
      
      function clr() {
        document.getElementById("textval").value = "";
      }
    
  