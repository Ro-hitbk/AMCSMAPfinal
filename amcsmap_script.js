let canvas = document.getElementById("canvas");
canvas.style.background = "#ff8";
let context = canvas.getContext("2d");

class Node {
  constructor(ptr) {
      this.ptr = ptr;
      this.link = null;
  }
}

class MainNode {
  constructor(block) {
      this.block = block;
      this.link = null;
  }
}

class MapClass {
  constructor() {
      this.arr = [
          new MainNode("M0"), new MainNode("M1"), new MainNode("M2"), new MainNode("M3"), new MainNode("M4"),
          new MainNode("K0"), new MainNode("K1"), new MainNode("K2"), new MainNode("K3"), new MainNode("K4"),
          new MainNode("J0"), new MainNode("J1"), new MainNode("J2"), new MainNode("J3"), new MainNode("J4"),
          new MainNode("E0"), new MainNode("E1"), new MainNode("E2"), new MainNode("E3"), new MainNode("E4"),
          new MainNode("F0"), new MainNode("F1"), new MainNode("F2"), new MainNode("F3"), new MainNode("F4")
      ];

      // Initialize links similar to the C++ constructor
      this.arr[0].link = new Node(this.arr[1]);
      this.arr[1].link = new Node(this.arr[0]);
      this.arr[1].link.link = new Node(this.arr[2]);
      this.arr[2].link = new Node(this.arr[1]);
      this.arr[2].link.link = new Node(this.arr[3]);
      this.arr[3].link = new Node(this.arr[2]);
      this.arr[3].link.link = new Node(this.arr[4]);
      this.arr[4].link = new Node(this.arr[3]);

      this.arr[5].link = new Node(this.arr[6]);
      this.arr[6].link = new Node(this.arr[5]);
      this.arr[6].link.link = new Node(this.arr[7]);
      this.arr[7].link = new Node(this.arr[6]);
      this.arr[7].link.link = new Node(this.arr[8]);
      this.arr[8].link = new Node(this.arr[7]);
      this.arr[8].link.link = new Node(this.arr[9]);
      this.arr[9].link = new Node(this.arr[8]);

      this.arr[10].link = new Node(this.arr[11]);
      this.arr[11].link = new Node(this.arr[10]);
      this.arr[11].link.link = new Node(this.arr[12]);
      this.arr[12].link = new Node(this.arr[11]);
      this.arr[12].link.link = new Node(this.arr[13]);
      this.arr[13].link = new Node(this.arr[12]);
      this.arr[13].link.link = new Node(this.arr[14]);
      this.arr[14].link = new Node(this.arr[13]);

      this.arr[15].link = new Node(this.arr[16]);
      this.arr[16].link = new Node(this.arr[15]);
      this.arr[16].link.link = new Node(this.arr[17]);
      this.arr[17].link = new Node(this.arr[16]);
      this.arr[17].link.link = new Node(this.arr[18]);
      this.arr[18].link = new Node(this.arr[17]);
      this.arr[18].link.link = new Node(this.arr[19]);
      this.arr[19].link = new Node(this.arr[18]);

      this.arr[20].link = new Node(this.arr[21]);
      this.arr[21].link = new Node(this.arr[20]);
      this.arr[21].link.link = new Node(this.arr[22]);
      this.arr[22].link = new Node(this.arr[21]);
      this.arr[22].link.link = new Node(this.arr[23]);
      this.arr[23].link = new Node(this.arr[22]);
      this.arr[23].link.link = new Node(this.arr[24]);
      this.arr[24].link = new Node(this.arr[23]);

      // Additional links
      this.arr[1].link.link.link = new Node(this.arr[6]);
      this.arr[2].link.link.link = new Node(this.arr[12]);
      this.arr[3].link.link.link = new Node(this.arr[8]);
      this.arr[3].link.link.link.link = new Node(this.arr[13]);
      this.arr[4].link.link = new Node(this.arr[9]);
      this.arr[4].link.link.link = new Node(this.arr[14]);
      this.arr[6].link.link.link = new Node(this.arr[1]);
      this.arr[6].link.link.link.link = new Node(this.arr[16]);
      this.arr[7].link.link.link = new Node(this.arr[12]);
      this.arr[7].link.link.link = new Node(this.arr[17]);
      this.arr[8].link.link.link = new Node(this.arr[3]);
      this.arr[8].link.link.link.link = new Node(this.arr[18]);
      this.arr[9].link.link = new Node(this.arr[4]);
      this.arr[8].link.link.link.link = new Node(this.arr[13]);
      this.arr[9].link.link.link = new Node(this.arr[14]);
      this.arr[9].link.link.link.link = new Node(this.arr[19]);
      this.arr[12].link.link.link = new Node(this.arr[2]);
      this.arr[12].link.link.link.link = new Node(this.arr[7]);
      this.arr[13].link.link.link = new Node(this.arr[3]);
      this.arr[13].link.link.link.link = new Node(this.arr[8]);
      this.arr[14].link.link = new Node(this.arr[4]);
      this.arr[14].link.link.link = new Node(this.arr[9]);
      this.arr[16].link.link = new Node(this.arr[6]);
      this.arr[17].link.link.link = new Node(this.arr[7]);
      this.arr[17].link.link.link.link = new Node(this.arr[22]);
      this.arr[18].link.link.link = new Node(this.arr[8]);
      this.arr[19].link.link = new Node(this.arr[9]);
      this.arr[19].link.link.link = new Node(this.arr[24]);
      this.arr[22].link.link.link = new Node(this.arr[17]);
      this.arr[24].link.link = new Node(this.arr[19]);

      //more
      this.arr[0].link.link = new Node(this.arr[10]); // M0 connected to J0
      this.arr[0].link.link.link = new Node(this.arr[5]); // M0 connected to K0 //
      this.arr[0].link.link.link.link = new Node(this.arr[15]); // M0 to E0
      this.arr[0].link.link.link.link.link = new Node(this.arr[20]); // M0 to F0
      this.arr[10].link.link = new Node(this.arr[20]); // J0 connected to F0
      this.arr[10].link.link.link = new Node(this.arr[5]); // J0 connected to K0
      this.arr[10].link.link.link.link = new Node(this.arr[0]); // J0 to M0
      this.arr[10].link.link.link.link.link = new Node(this.arr[15]); // J0 to E0
      this.arr[5].link.link = new Node(this.arr[15]); // K0 connected to E0 
      this.arr[5].link.link.link = new Node(this.arr[10]); // K0 connected to J0
      this.arr[5].link.link.link.link = new Node(this.arr[20]); // K0 to F0
      this.arr[5].link.link.link.link.link = new Node(this.arr[0]); // K0 connected to M0 //
      this.arr[15].link.link = new Node(this.arr[5]); // E0 connected to K0
      this.arr[15].link.link.link = new Node(this.arr[20]); // E0 connected to F0
      this.arr[15].link.link.link.link = new Node(this.arr[0]); // E0 to M0
      this.arr[15].link.link.link.link.link = new Node(this.arr[10]); // E0 to J0
      this.arr[20].link.link = new Node(this.arr[0]); // F0 to M0
      this.arr[20].link.link.link = new Node(this.arr[10]); // F0 to J0
      this.arr[20].link.link.link.link = new Node(this.arr[5]); // F0 to K0
      this.arr[20].link.link.link.link.link = new Node(this.arr[15]); // F0 to E0
  }

  isGroundFloorNode(node) {
    return node.block.endsWith('0');
  }


  getDistance(node1, node2) {
    if (this.isGroundFloorNode(node1) && this.isGroundFloorNode(node2)) {
      if(node1.block[0] === "F" && node2.block[0] === "J" || node1.block[0] === "J" && node2.block[0] === "F" ){
        return 2.12;
      }
      else if(node1.block[0] === "F" && node2.block[0] === "M" || node1.block[0] === "M" && node2.block[0] === "F"){
        return 3.08;
      }
      else if(node1.block[0] === "F" && node2.block[0] === "K" || node1.block[0] === "K" && node2.block[0] === "F"){
        return 2.58;
      }
      else if(node1.block[0] === "E" && node2.block[0] === "M" || node1.block[0] === "M" && node2.block[0] === "E"){
        return 2.54;
      }
      else if(node1.block[0] === "E" && node2.block[0] === "J" || node1.block[0] === "J" && node2.block[0] === "E"){
        return 3.06;
      }
      else if(node1.block[0] === "K" && node2.block[0] === "J" || node1.block[0] === "J" && node2.block[0] === "K"){
        return 1.54;
      }
      else if(node1.block[0] === "K" && node2.block[0] === "M" || node1.block[0] === "M" && node2.block[0] === "K"){
        return 2.04;
      }
      return 1.02;
    }
    return 1;
  }



  display(end) {
      let outp = null;
      let start = document.querySelector('#ip2').value;
      console.log(start);
      document.querySelector('#op').innerText = "...";
      let startUpper = start.toUpperCase();
      if (startUpper === "BRIDGE"){
        startUpper = "E2";
      }
      else if (startUpper === "CANTEEN"){
        startUpper = "F0";
      }
      else if (startUpper === "CSL-1"){
        startUpper = "M0";
      }
      else if (startUpper === "CSL-2"){
        startUpper = "M0";
      }
      else if (startUpper === "CSL-3"){
        startUpper = "M0";
      }
      else if (startUpper === "CSL"){
        startUpper = "M0";
      }
      else if (startUpper === "DSL"){
        startUpper = "M0";
      }
      else if (startUpper === "OSL"){
        startUpper = "M1";
      }
      else if (startUpper === "SIL"){
        startUpper = "M2";
      }
      else if (startUpper === "OCL"){
        startUpper = "E3";
      }
      else if (startUpper === "IAL"){
        startUpper = "J4";
      }
      else if (startUpper === "NSL"){
        startUpper = "J3";
      }
      else if (startUpper === "SCL"){
        startUpper = "F3";
      }
      else if (startUpper === "PHYSICS LAB"){
        startUpper = "M0";
      }
      else if(startUpper.length === 4){
        let smtg = startUpper.substr(0,1);
        smtg += startUpper.substr(1,1) - 1;
        startUpper = smtg.toUpperCase();
        console.log(startUpper);
        start = startUpper;
      }

      const endUpper = end.toUpperCase();
      let startNode = null;
      let endNode = null;

      for (let i = 0; i < 25; i++) {
          if (this.arr[i].block === startUpper) {
              startNode = this.arr[i];
          }
          if (this.arr[i].block === endUpper) {
              endNode = this.arr[i];
          }
      }

      if (!startNode || !endNode) {
          outp = "Invalid blocks entered.";
          return;
      }

      const previous = new Map();
      const distance = new Map();
      const path = [];
      const instruction = [];
      const visited = new Map();

      for (let i = 0; i < 25; i++) {
          distance.set(this.arr[i], Infinity);
          visited.set(this.arr[i], false);
      }

      distance.set(startNode, 0);

      let current = startNode;
      while (current !== endNode) {
          visited.set(current, true);

          let neighbor = current.link;
          while (neighbor !== null) {
              const neighborPtr = neighbor.ptr;
              if (!visited.get(neighborPtr) && distance.get(current) + this.getDistance(current, neighborPtr) < distance.get(neighborPtr)) { // <- modified code here 
                  distance.set(neighborPtr, distance.get(current) + this.getDistance(current, neighborPtr));
                  previous.set(neighborPtr, current);
              }

              neighbor = neighbor.link;
          }

          let minDist = Infinity;
          let next = null;
          for (let i = 0; i < 25; i++) {
              if (!visited.get(this.arr[i]) && distance.get(this.arr[i]) < minDist) {
                  minDist = distance.get(this.arr[i]);
                  next = this.arr[i];
              }
          }

          if (!next) {
              outp = `No path found between ${start} and ${end}`;
              return;
          }

          current = next;
      }

      let temp = endNode;
      while (temp !== startNode) {
          path.push(temp.block);
          temp = previous.get(temp);
      }
      path.push(startNode.block);

      context.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.background = "#ff8";
      context = canvas.getContext("2d");

      context.fillStyle = 'Black';
      context.fillRect(10,10,60,50);
      
      context.fillRect(40,95,70,50);
      
      context.fillRect(160,95,65,50);
     
      context.fillRect(210,10,80,50);
      
      context.fillRect(240,95,50,50);
      
      context.fillStyle = 'white';
      context.font = "30px Arial";
      context.fillText("F",30,46);
      context.fillText("E",65,130);
      context.fillText("K",180,130);
      context.fillText("M",252,130);
      context.fillText("J",240,46);


      outp = `Path from ${start} to ${end}:\n`;
      context.fillStyle = 'red';
      context.font = "30px Arial";
      if(startUpper[0] === "E"){
        context.fillText("E",65,130);
      }
      else if(startUpper[0] === "F"){
        context.fillText("F",30,46); 
      }
      else if(startUpper[0] === "K"){
        context.fillText("K",180,130);
      }
      else if(startUpper[0] === "M"){
        context.fillText("M",252,130);
      }
      else if(startUpper[0] === "J"){
        context.fillText("J",240,46);
      }
      context.fillStyle = 'rgb(84, 241, 84)';
      if(end[0] === "E"){
        context.fillText("E",65,130);
      }
      else if(end[0] === "F"){
        context.fillText("F",30,46); 
      }
      else if(end[0] === "K"){
        context.fillText("K",180,130);
      }
      else if(end[0] === "M"){
        context.fillText("M",252,130);
      }
      else if(end[0] === "J"){
        context.fillText("J",240,46);
      }
      let prev = "NULL";
      

          let lastInstruction = null;
          while (path.length > 0) {
              const top = path.pop();
              let floorins;
              const floorNumber = parseInt(top.substr(1, 1));
              console.log(floorNumber);

              if (floorNumber === 0) {
                  floorins = "Ground";
              } else if (floorNumber === 1) {
                  floorins = "First";
              } else if (floorNumber === 2) {
                  floorins = "Second";
              } else if (floorNumber === 3) {
                  floorins = "Third";
              } else if (floorNumber === 4) {
                  floorins = "Fourth";
              } else {
                  floorins = "Some";
              }
              outp += (`☆ ${top.substr(0, 1)} block ${floorins} Floor ☆\n`);
              if(path.length > 0) {
                outp += "⬇️\n";
              }
              if (prev !== "NULL") {
                  let newInstruction = null;
                  if (parseInt(prev.substr(1, 1)) > parseInt(top.substr(1, 1))) {
                      newInstruction = "Use stairs or lift to go down";
                  } else if (parseInt(prev.substr(1, 1)) < parseInt(top.substr(1, 1))) {
                      newInstruction = "Use stairs or lift to go up";
                  } else if (parseInt(prev.substr(1, 1)) == parseInt(top.substr(1, 1)) && parseInt(top.substr(1, 1)) == 0) {
                      newInstruction = "🔵 Walk through the path 🔵";
                      context.strokeStyle = "blue";
                      if(prev.substr(0,1) == "M" && top.substr(0,1) == "J" || prev.substr(0,1) == "J" && top.substr(0,1) == "M"){
                        context.beginPath();
                        context.moveTo(270, 60);
                        context.bezierCurveTo(240, 80, 245, 85, 245, 95);
                        context.stroke();
                      }
                      else if(prev.substr(0,1) == "F" && top.substr(0,1) == "J" || prev.substr(0,1) == "J" && top.substr(0,1) == "F"){
                        context.beginPath();
                        context.moveTo(70, 50);
                        context.bezierCurveTo(240, 80, 245, 85, 270, 60);
                        context.stroke();
                      }
                      else if(prev.substr(0,1) == "E" && top.substr(0,1) == "M" || prev.substr(0,1) == "M" && top.substr(0,1) == "E"){
                        context.beginPath();
                        context.moveTo(50, 95);
                        context.bezierCurveTo(100, 60, 160, 60, 245, 95);
                        context.stroke();
                      }
                      /*else if(prev.substr(0,1) == "E" && top.substr(0,1) == "F" || prev.substr(0,1) == "F" && top.substr(0,1) == "E"){
                        context.beginPath();
                        context.moveTo(20, 20);
                        context.bezierCurveTo(20, 100, 200, 100, 200, 20);
                        context.stroke();
                      }
                      else if(prev.substr(0,1) == "K" && top.substr(0,1) == "J" || prev.substr(0,1) == "J" && top.substr(0,1) == "K"){
                        context.beginPath();
                        context.moveTo(20, 20);
                        context.bezierCurveTo(20, 100, 200, 100, 200, 20);
                        context.stroke();
                      }*/
                      else if(prev.substr(0,1) == "F" && top.substr(0,1) == "M" || prev.substr(0,1) == "M" && top.substr(0,1) == "F"){
                        context.beginPath();
                        context.moveTo(70, 50);
                        context.bezierCurveTo(100, 70, 240, 80, 240, 100);
                        context.stroke();
                      }
                      else if(prev.substr(0,1) == "K" && top.substr(0,1) == "M" || prev.substr(0,1) == "M" && top.substr(0,1) == "K"){
                        context.beginPath();
                        context.moveTo(160, 110);
                        context.bezierCurveTo(150, 80, 180, 80, 240, 100);
                        context.stroke();
                      }

                  } else {
                      newInstruction = "⚫️ Use connector ⚫️";
                      context.strokeStyle = "black";
                      context.fillStyle = 'white';
                      context.font = "10px Arial";
                      let txt = `(floor - ${prev.substr(1,1)})`;
                      if(prev.substr(0,1) == "M" && top.substr(0,1) == "J" || prev.substr(0,1) == "J" && top.substr(0,1) == "M"){
                        context.beginPath();
                        context.moveTo(270,100);
                        context.lineTo(270,60);
                        context.stroke();
                        if(prev.substr(0,1) == "M"){
                          context.fillText(txt,244,140);
                        }
                        else if(prev.substr(0,1) == "J"){
                          context.fillText(txt,230,55);
                        }
                      }
                      else if(prev.substr(0,1) == "M" && top.substr(0,1) == "K" || prev.substr(0,1) == "K" && top.substr(0,1) == "M"){
                        context.beginPath();
                        context.moveTo(200,120);
                        context.lineTo(240,120);
                        context.stroke();
                        if(prev.substr(0,1) == "M"){
                          context.fillText(txt,244,140);
                        }
                        else if(prev.substr(0,1) == "K"){
                          context.fillText(txt,170,140);
                        }
                      }
                      else if(prev.substr(0,1) == "K" && top.substr(0,1) == "E" || prev.substr(0,1) == "E" && top.substr(0,1) == "K"){
                        context.beginPath();
                        context.moveTo(100,120);
                        context.lineTo(160,120);
                        context.stroke();
                        if(prev.substr(0,1) == "K"){
                          context.fillText(txt,170,140);
                        }
                        else if(prev.substr(0,1) == "E"){
                          context.fillText(txt,55,140);
                        }
                      }
                      else if(prev.substr(0,1) == "E" && top.substr(0,1) == "F" || prev.substr(0,1) == "F" && top.substr(0,1) == "E"){
                        context.beginPath();
                        context.moveTo(50,60);
                        context.lineTo(50,95);
                        context.stroke();
                        if(prev.substr(0,1) == "E"){
                          context.fillText(txt,55,140);
                        }
                        else if(prev.substr(0,1) == "F"){
                          context.fillText(txt,20,56);
                        }
                      }
                      else if(prev.substr(0,1) == "K" && top.substr(0,1) == "J" || prev.substr(0,1) == "J" && top.substr(0,1) == "K"){
                        context.beginPath();
                        context.moveTo(220,120);
                        context.lineTo(220,60);
                        context.stroke();
                        if(prev.substr(0,1) == "K"){
                          context.fillText(txt,170,140);
                        }
                        else if(prev.substr(0,1) == "J"){
                          context.fillText(txt,240,56);
                        }
                      }
                  }
                  if (newInstruction !== lastInstruction) {
                      instruction.push(newInstruction);
                      lastInstruction = newInstruction;
                  }
              }
              prev = top;
          }
          

      outp += "\n";
      while (instruction.length > 0) {
          outp += instruction.shift()+"\n";
      }
    
      document.querySelector('#op').innerText = outp;

      
  }


}

let divi = document.getElementById('hash');
divi.style.display = 'none';

let div = document.getElementById('hish');
div.style.display = 'none';
let display = 0;


function countdown()
{
  const date = new Date();
  let ampm = "AM";
  let hours = date.getHours();
  if (hours > 12){
    ampm = "PM";
    hours -= 12;
  }
  else if(hours == 12){
    ampm = "PM";
  }
  if(hours < 10){
    hours = '0' + hours;
  }
  let minutes = date.getMinutes();
  if(minutes < 10){
    minutes = '0' + minutes;
  }
  let seconds = date.getSeconds();
  if(seconds < 10){
    seconds = '0' + seconds;
  }
  let time = hours + ":" + minutes + ":" + seconds + " " + ampm;

  document.querySelector('#time').innerText = time;
}

//let finp = 0;

function period() {
  const date = new Date();
  let acthour = date.getHours();
  let actmin = date.getMinutes();
  const hour_min = acthour * 60 + actmin;

  if (hour_min >= 480 && hour_min < 560) {
    return 1;
  } else if (hour_min >= 560 && hour_min < 610) {
    return 2;
  } else if (hour_min >= 610 && hour_min < 630) {
    return 0;
  } else if (hour_min >= 630 && hour_min < 680) {
    return 3;
  } else if (hour_min >= 680 && hour_min < 730) {
    return 4;
  } else if (hour_min >= 730 && hour_min < 820) {
    return 0;
  } else if (hour_min >= 820 && hour_min < 870) {
    return 5;
  } else if (hour_min >= 870 && hour_min < 920) {
    return 6;
  } else if (hour_min >= 920 && hour_min < 930) {
    return 0;
  } else if (hour_min >= 930 && hour_min < 970) {
    return 7;
  } else if (hour_min >= 970 && hour_min < 1020) {
    return 8;
  } else {
    return 0;
  }
}

const timetableData = {
  

      "tcs": {
        "Mon": ["23XT15:J510", "23XT12:J510", "23XT16:physics", "23XT16:physics", "23XT18:J511", "23XT18:J511", "23XT13:J511", "NULL"],
        "Tue": ["23XT18:J511", "23XT18:J511", "23XT13:J511", "23XT14:J511", "23XT12:J511", "23XT11:J511", "23XT15:J511", "NULL"],
        "Wed": ["23XT13:J513", "23XT15:J508", "23XT17:CSL-1", "23XT17:CSL-1", "23XT14:J508", "23XT11:J508", "23XT16:physics", "23XT16:physics","NULL"],
        "Thu": ["NULL", "23XT11:J511", "23XT13:J511", "23XT12:J511", "23XT17:CSL-1", "23XT17:CSL-1", "TWM:J511","NULL"],
        "Fri": ["NULL", "23XT11:J510", "23XT14:J510", "23XT11:J510", "23XT14:J510", "SMR:J510", "23XT15:J510", "NULL"]
      },
      "ds": {
        "Mon": ["NULL", "23XD15:J511", "23XD14:J511", "23XD11:J511", "23XD13:J512", "23XD12:DSL", "23XD12:DSL", "NULL"],
        "Tue": ["23XD11:J512", "23XD12:J512", "23XD12:J512", "23XD13:J512", "23XD17:CSL-1", "23XD17:CSL-1", "23XD15:J512", "NULL"],
        "Wed": ["23XD17:CSL-1", "23XD17:CSL-1", "23XD15:J511", "23XD12:J511", "23XD16:NSL", "23XD16:NSL", "NULL", "NULL"],
        "Thu": ["23XD12:J512", "23XD13:J512", "23XD14:J512", "23XD11:J512", "SMR:J512", "23XD13:J512", "23XD11:J512", "NULL"],
        "Fri": ["23XD18:physics", "23XD18:physics", "23XD16:NSL", "23XD16:NSL", "23XD14:J511", "23XD11:J511", "TWM:J511", "NULL"]
      },
      "ss": {
        "Mon": ["23XW18:physics", "23XW18:physics", "23XW11:J510", "23XW14:J510", "SMR:J510", "23XW17:CSL-1", "23XW17:CSL-1", "NULL"],
        "Tue": ["23XW16:DSL", "23XW16:DSL", "23XW13:J510", "23XW15:J510", "23XW14:J510", "23XW12:J510", "23XW11:J510", "NULL"],
        "Wed": ["23XW14:J510", "23XW12:J510", "23XW11:J510", "23XW15:J510", "23XW18:physics", "23XW18:physics", "23XW13:J510", "NULL"],
        "Thu": ["23XW17:CSL-1", "23XW17:CSL-1", "23XW11:J510", "TWM:J510", "23XW15:J510", "23XW13:J510", "23XW14:J510", "NULL"],
        "Fri": ["23XW11:J508", "23XW13:J508", "23XW15:J508", "23XW12:J508", "23XW16:NSL", "23XW16:NSL", "NULL", "NULL"]
      },
      "cs": {
        "Mon": ["NULL", "23XC14:J508", "23XC15:J508", "23XC13:J508", "23XC11:J508", "23XC12:J508", "TWM:J508", "NULL"],
        "Tue": ["23XC12:J508", "23XC14:J508", "23XC11:J508", "23XC15:J508", "23XC13:J508", "SMR:J508", "NULL", "NULL"],
        "Wed": ["23XC16:DSL", "23XC16:DSL", "23XC13:J508", "23XC11:J508", "23XC17:CSL-1", "23XC17:CSL-1", "23XC14:J508", "NULL"],
        "Thu": ["23XC17:CSL-3", "23XC17:CSL-3", "23XC15:J508", "NULL", "23XC14:J508", "23XC11:J508", "23XC12:J508", "NULL"],
        "Fri": ["23XC16:DSL", "23XC16:DSL", "23XC18:physics", "23XC18:physics", "23XC15:J508", "23XC13:J508", "23XC14:J508", "NULL"]
      }

};

localStorage.setItem('timetableData', JSON.stringify(timetableData));


function rollver(n) {
  let dest = "NULL";
  let oup = "";
  let d;
  if(tcs.checked){
    d = "tcs";
  }
  else if(ss.checked){
    d = "ss";
  }
  else if(ds.checked){
    d = "ds";
  }
  else if(cs.checked){
    d = "cs";
  }
  const timetableData = JSON.parse(localStorage.getItem('timetableData'));
  
  if (!timetableData) {
    oup = "No timetable data available.";
    return dest;
  }

  console.log(n);
  console.log("hi");
  console.log(d);
  
  const date = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDay = days[date.getDay()];
  const currentTime = date.toTimeString().slice(0, 5);

  console.log(`${currentDay} ${currentTime}`);
  
  let s = currentDay.substr(0, 3);
  const dayData = timetableData[s.toLowerCase()];

  if (s === 'Sun' || s === 'Sat'){
    oup = "NO CLASS";
    document.querySelector('#op0').innerText = oup;
    return dest;
  }

  if (!n || n > 8) {
    oup = "NO CLASS";
    if (confirm("NO CLASS\nWant to check for a period?")) {
      n = prompt("Enter the period you want to check (1 - 8):");
      if(n > 8 || n < 1){
        i = 0;
        return dest;
      }
      //finp = n;
      i = n;
    } else {
      i = 0;
      return dest;
    }
  }
 
  const dayTimetable = timetableData[d][s];
  if (!dayTimetable) {
    oup = "No timetable found for the day.";
    return dest;
  }

  const period = dayTimetable[n - 1]; 
  
  if (period === "NULL") {
    oup = "NO class";
   
    console.log(period);
    
  } else if ( period.substr(0, 1) == "T" || period.substr(0, 1) == "S"){
    oup = `${period.substr(0,3)}\n`;
    oup += `${period.substr(4, 1)} Block\n`;
    oup += `Floor ${parseInt(period.substr(5, 1)) - 1}\n`;
    dest = period.substr(4, 1) + (parseInt(period.substr(5, 1)) - 1);
    oup += period.substr(4, 4) + "\n";  
  
  } else if ((parseInt(period.substr(4, 2)) > 15 && (d !== "tcs" || parseInt(period.substr(4,2)) !== 18 )) || (d === "ds" && parseInt(period.substr(4,2)) === 12) ) {
    oup = `${period.substr(0,6)}\n`;
    const labs = ["CSL-1", "CSL-3" , "DSL", "OSL", "SIL", "OCL", "IAL", "NSL", "SCL","physics"];
    const labCode = period.substr(7);
    const labIndex = labs.indexOf(labCode);
    const labDest = ["M0", "M0" , "M0", "M1", "M2", "E3", "J4", "J3" , "F3", "M0" ];
    
    console.log(parseInt(period.substr(4, 2)));
    console.log(labCode);
    if (labIndex !== -1) {
      dest = labDest[labIndex];
      oup += (`${labCode} Lab` + "\n");
    }
  } else {
    oup = `${period.substr(0,6)}\n`;
    oup += `${period.substr(7, 1)} Block\n`;
    oup += `Floor ${parseInt(period.substr(8, 1)) - 1}\n`;
    dest = period.substr(7, 1) + (parseInt(period.substr(8, 1)) - 1);
    oup += period.substr(7, 4) + "\n";
  }
  oup += `(period - ${n})`;
  document.querySelector('#op0').innerText = oup;
  display = 1;
  if(display === 1){
    div.style.display = 'block';
    divi.style.display = 'block';
    display = 0;
  }
  else{
    div.style.display = 'none';
    divi.style.display = 'none';
  }
  return dest;
}

function showFullTimetable() {
  
  let classKey;
  if(tcs.checked){
    classKey = "tcs";
  }
  else if(ss.checked){
    classKey = "ss";
  }
  else if(ds.checked){
    classKey = "ds";
  }
  else if(cs.checked){
    classKey = "cs";
  }
  else{
    alert("please select your programme!");
    return;
  }
  const timetableData = JSON.parse(localStorage.getItem('timetableData'));

  if (!timetableData) {
      alert("No timetable data available.");
      return;
  }


  const timetable = timetableData[classKey];
  if (!timetable) {
      alert("No timetable found for the class.");
      return;
  }

  localStorage.setItem('timetable', JSON.stringify(timetable));
  window.location.href = 'timetable.html';
}

let i = 0;

context.fillRect(10,10,60,50);
context.fillStyle = 'Black';

context.fillRect(40,95,70,50);

context.fillRect(160,95,65,50);

context.fillRect(210,10,80,50);

context.fillRect(240,95,50,50);

context.fillStyle = 'white';
context.font = "30px Arial";
context.fillText("F",30,46);
context.fillText("E",65,130);
context.fillText("K",180,130);
context.fillText("M",252,130);
context.fillText("J",240,46);

setInterval(countdown,1000);
