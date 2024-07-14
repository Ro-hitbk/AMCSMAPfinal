let canvas = document.getElementById("canvas");
canvas.style.background = "#e5e4e2";
let context = canvas.getContext("2d");
let id1;
let id2;
let id3;
let id4;
let id5;
let id6;
let id7;
let id8;
let id9;
let id10;

function canvacr(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.background = "#e5e4e2";
  context = canvas.getContext("2d");

  context.fillStyle = '#006B88';

  context.fillRect(152,50,43,15); //f

  context.fillRect(190,100,30,40); //e

  context.fillRect(225,100,30,40); //k

  context.fillRect(240,25,50,40); //j

  context.fillRect(260,100,30,40); //m

  context.fillRect(10,95,45,45); //a

  context.fillRect(203,50,30,15); //t

  context.fillRect(203,10,30,35); //h

  context.fillStyle = 'grey';

  context.fillRect(127,38,20,46); //g

  context.fillRect(87,89,60,15); //d

  context.fillRect(60,55,20,50); //y

  context.fillRect(60,10,120,18); //i

  context.fillRect(65,123,17,17); //c

  context.fillRect(10,55,40,25); //b

}

function allbl(){
  context.fillStyle = 'white';
  context.font = "13px Arial";
  context.fillText("F",170,63);
  context.fillText("E",200,128);
  context.fillText("K",234,128);
  context.fillText("M",268,128);
  context.fillText("J",260,51);
  context.fillText("A",27,125);
  context.fillText("G",131,64);
  context.fillText("D",112,102);
  context.fillText("Y",65,88);
  context.fillText("T",214,63);
  context.fillText("H",212,33);
  context.fillText("I",115,24);
  context.fillText("B",25,73);
  context.fillText("C",69,136);
}


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
          new MainNode("F0"), new MainNode("F1"), new MainNode("F2"), new MainNode("F3"), new MainNode("F4"),
          new MainNode("A0"), new MainNode("A1"), new MainNode("A2"), new MainNode("A3"), new MainNode("A4"),
          new MainNode("Y0"), new MainNode("Y1"), new MainNode("Y2"), new MainNode("Y3"), new MainNode("Y4"),
          new MainNode("G0"), new MainNode("G1"), new MainNode("G2"), new MainNode("G3"), new MainNode("G4"),
          new MainNode("D0"),
          new MainNode("H0"), new MainNode("H1"),
          new MainNode("T0")
      ];

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
      this.arr[21].link.link.link = new Node(this.arr[36]);
      this.arr[22].link.link.link = new Node(this.arr[17]);
      this.arr[22].link.link.link.link = new Node(this.arr[37]);
      this.arr[23].link.link.link = new Node(this.arr[38]);
      this.arr[24].link.link = new Node(this.arr[19]);
      this.arr[24].link.link.link = new Node(this.arr[39]);

      //more
      this.arr[0].link.link = new Node(this.arr[10]); // M0 connected to J0
      this.arr[0].link.link.link = new Node(this.arr[5]); // M0 connected to K0 //
      this.arr[0].link.link.link.link = new Node(this.arr[15]); // M0 to E0
      this.arr[0].link.link.link.link.link = new Node(this.arr[20]); // M0 to F0

      this.arr[0].link.link.link.link.link.link = new Node(this.arr[25]); // M0 to A0
      this.arr[0].link.link.link.link.link.link.link = new Node(this.arr[41]); // M0 to h0
      this.arr[0].link.link.link.link.link.link.link.link = new Node(this.arr[43]); // M0 to t0

      this.arr[10].link.link = new Node(this.arr[20]); // J0 connected to F0
      this.arr[10].link.link.link = new Node(this.arr[5]); // J0 connected to K0
      this.arr[10].link.link.link.link = new Node(this.arr[0]); // J0 to M0
      this.arr[10].link.link.link.link.link = new Node(this.arr[15]); // J0 to E0

      this.arr[10].link.link.link.link.link.link = new Node(this.arr[41]); // J0 to H0
      this.arr[10].link.link.link.link.link.link.link = new Node(this.arr[25]); // J0 to A0

      this.arr[5].link.link = new Node(this.arr[15]); // K0 connected to E0 
      this.arr[5].link.link.link = new Node(this.arr[10]); // K0 connected to J0
      this.arr[5].link.link.link.link = new Node(this.arr[20]); // K0 to F0
      this.arr[5].link.link.link.link.link = new Node(this.arr[0]); // K0 connected to M0 //

      this.arr[5].link.link.link.link.link.link = new Node(this.arr[41]); // K0 connected to h0 //

      this.arr[15].link.link = new Node(this.arr[5]); // E0 connected to K0
      this.arr[15].link.link.link = new Node(this.arr[20]); // E0 connected to F0
      this.arr[15].link.link.link.link = new Node(this.arr[0]); // E0 to M0
      this.arr[15].link.link.link.link.link = new Node(this.arr[10]); // E0 to J0

      this.arr[15].link.link.link.link.link.link = new Node(this.arr[25]); // E0 to A0
      this.arr[15].link.link.link.link.link.link.link = new Node(this.arr[43]); // E0 to t0
      //this.arr[15].link.link.link.link.link.link.link.link = new Node(this.arr[41]); // E0 to h0

      this.arr[20].link.link = new Node(this.arr[0]); // F0 to M0
      this.arr[20].link.link.link = new Node(this.arr[10]); // F0 to J0
      this.arr[20].link.link.link.link = new Node(this.arr[5]); // F0 to K0
      this.arr[20].link.link.link.link.link = new Node(this.arr[15]); // F0 to E0

      this.arr[20].link.link.link.link.link.link = new Node(this.arr[25]); //F0 TO A0


      this.arr[20].link.link.link.link.link.link.link = new Node(this.arr[35]); //F0 TO G0
      this.arr[20].link.link.link.link.link.link.link.link = new Node(this.arr[43]); //F0 TO t0



      //even more
      this.arr[25].link = new Node(this.arr[26]);//A0 TO A1
      this.arr[26].link = new Node(this.arr[25]); //A1 TO A0
      this.arr[25].link.link = new Node(this.arr[20]); //A0 TO F0 //
      this.arr[25].link.link.link = new Node(this.arr[0]);//A0 TO M0 //
      this.arr[25].link.link.link.link = new Node(this.arr[10]);//A0 TO J0 //
      this.arr[25].link.link.link.link.link = new Node(this.arr[15]);//A0 TO E0 //
      this.arr[25].link.link.link.link.link.link = new Node(this.arr[43]);//A0 TO t0 //
      this.arr[26].link.link = new Node(this.arr[27]);//A1 TO A2
      this.arr[26].link.link.link = new Node(this.arr[32]);//A1 TO Y2//
      this.arr[27].link = new Node(this.arr[26]);// A2 TO A1
      this.arr[27].link.link = new Node(this.arr[28]);//A2 TO A3
      this.arr[28].link = new Node(this.arr[27]);// A3 TO A2
      this.arr[28].link.link = new Node(this.arr[29]);//A3 TO A4
      this.arr[29].link = new Node(this.arr[28]);//A4 TO A3

      //innum
      this.arr[30].link = new Node(this.arr[31]);//Y0 TO Y1
      this.arr[31].link = new Node(this.arr[30]);//Y1 TO Y0
      this.arr[31].link.link = new Node(this.arr[32]);//Y1 TO Y2
      this.arr[32].link = new Node(this.arr[31]);//Y2 TO Y1
      this.arr[32].link = new Node(this.arr[26]);//Y2 TO A1 //
      this.arr[32].link.link = new Node(this.arr[33]);//Y2 TO Y3
      this.arr[33].link = new Node(this.arr[32]);//Y3 TO Y2
      this.arr[33].link.link = new Node(this.arr[34]);//Y3 TO Y4
      this.arr[34].link = new Node(this.arr[33]);//Y4 TO Y3

      //MORE INNUM
      this.arr[35].link = new Node(this.arr[36]);//G0 TO G1
      this.arr[35].link.link = new Node(this.arr[20]);//G0 TO F0
      this.arr[36].link = new Node(this.arr[35]); //G1 TO G0
      this.arr[36].link.link = new Node(this.arr[37]);//G1 TO G2
      this.arr[36].link.link.link = new Node(this.arr[21]);//G1 TO F1
      this.arr[37].link = new Node(this.arr[36]);// G2 TO G1
      this.arr[37].link.link = new Node(this.arr[38]);//G2 TO G3
      this.arr[37].link.link.link = new Node(this.arr[22]);//G2 TO F2
      this.arr[38].link = new Node(this.arr[37]);// G3 TO G2
      this.arr[38].link.link = new Node(this.arr[39]);//G3 TO G4
      this.arr[38].link.link.link = new Node(this.arr[23]);//G3 TO F3
      this.arr[39].link = new Node(this.arr[38]);//G4 TO G3
      this.arr[39].link.link = new Node(this.arr[24]);//G4 TO F4

      
      //MOREE
      this.arr[40].link = new Node(this.arr[35]);//D0 to G0
      this.arr[40].link.link = new Node(this.arr[30]);//D0 to Y0

      this.arr[41].link = new Node(this.arr[10]); //h0 to j0
      this.arr[41].link.link = new Node(this.arr[43]); //h0 to t0
      this.arr[41].link.link.link = new Node(this.arr[42]); //h0 to h1
      this.arr[41].link.link.link.link = new Node(this.arr[0]); //h0 to m0
      this.arr[41].link.link.link.link.link = new Node(this.arr[5]); //h0 to k0

      this.arr[42].link = new Node(this.arr[41]); //h1 to h0

      this.arr[43].link = new Node(this.arr[41]);// t0 to h0
      this.arr[43].link.link = new Node(this.arr[15]);// t0 to e0
      this.arr[43].link.link.link = new Node(this.arr[25]);// t0 to a0
      this.arr[43].link.link.link.link = new Node(this.arr[20]);// t0 to f0
      this.arr[43].link.link.link.link.link = new Node(this.arr[0]);// t0 to m0
      this.arr[43].link.link.link.link.link.link = new Node(this.arr[10]);// t0 to j0
      
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
      else if(node1.block[0] === "F" && node2.block[0] === "A" || node1.block[0] === "A" && node2.block[0] === "F"){
        return 5.30;
      }
      else if(node1.block[0] === "E" && node2.block[0] === "A" || node1.block[0] === "A" && node2.block[0] === "E"){
        return 4.40;
      }
      else if(node1.block[0] === "K" && node2.block[0] === "A" || node1.block[0] === "A" && node2.block[0] === "K"){
        return 4.70;
      }
      else if(node1.block[0] === "J" && node2.block[0] === "A" || node1.block[0] === "A" && node2.block[0] === "J"){
        return 6.20;
      }
      else if(node1.block[0] === "M" && node2.block[0] === "A" || node1.block[0] === "A" && node2.block[0] === "M"){
        return 6.50;
      }
      else if(node1.block[0] === "T" && node2.block[0] === "A" || node1.block[0] === "A" && node2.block[0] === "T"){
        return 5.60;
      }
      else if(node1.block[0] === "T" && node2.block[0] === "E" || node1.block[0] === "E" && node2.block[0] === "T"){
        return 1.70;
      }
      else if(node1.block[0] === "T" && node2.block[0] === "F" || node1.block[0] === "F" && node2.block[0] === "T"){
        return 1.70;
      }
      else if(node1.block[0] === "T" && node2.block[0] === "J" || node1.block[0] === "J" && node2.block[0] === "T"){
        return 1.70;
      }
      else if(node1.block[0] === "T" && node2.block[0] === "M" || node1.block[0] === "M" && node2.block[0] === "T"){
        return 1.80;
      }
      else if(node1.block[0] === "K" && node2.block[0] === "H" || node1.block[0] === "H" && node2.block[0] === "K"){
        return 1.80;
      }
      return 1.02;
    }
    return 1;
  }

  display(end) {
      canvacr();
      allbl();
      fsmtg();
      console.log(this.arr[25]);
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

      if((startUpper.length != 2)||(startUpper[0]!='H' && startUpper[0]!='T' && startUpper[0]!='F' && startUpper[0]!='A' && startUpper[0]!='M' && startUpper[0]!='K' && startUpper[0]!='E' && startUpper[0]!='J')||(startUpper[0] == 'H' && startUpper[1] > 1 )||(startUpper[0] == 'M' && startUpper[1] > 4)||(startUpper[0] == 'K' && startUpper[1] > 4)||(startUpper[0] == 'E' && startUpper[1] > 4)||(startUpper[0] == 'J' && startUpper[1] > 4)||(startUpper[0] == 'F' && startUpper[1] > 4)||(startUpper[0] == 'A' && startUpper[1] > 4)||(startUpper[0] == 'T' && startUpper[1] > 0) ){
        alert("Enter a valid start location!");
        return;
      }

      if(startUpper[0]=='G' || startUpper[0]=='D' || startUpper[0]=='Y' || startUpper[0]=='B' || startUpper[0]=='C' || startUpper[0]=='I'){
        alert("Routes from this block are unavailable");
      }


      const endUpper = end.toUpperCase();
      let startNode = null;
      let endNode = null;

      for (let i = 0; i < 44; i++) {
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

      for (let i = 0; i < 44; i++) {
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
          for (let i = 0; i < 44; i++) {
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

      
      outp = `Path from ${start} to ${end}:\n`;


      function rg(){
        context.fillStyle = 'red';
        context.font = "13px Arial";
        if(startUpper[0] === "E"){
          context.fillText("E",200,128);
        }
        else if(startUpper[0] === "F"){
          context.fillText("F",170,63); 
        }
        else if(startUpper[0] === "K"){
          context.fillText("K",234,128);
        }
        else if(startUpper[0] === "M"){
          context.fillText("M",268,128);
        }
        else if(startUpper[0] === "J"){
          context.fillText("J",260,51);
        }
        else if(startUpper[0] === "A"){
          context.fillText("A",27,125);
        }
        else if(startUpper[0] === "T"){
          context.fillText("T",214,63);
        }
        else if(startUpper[0] === "H"){
          context.fillText("H",212,33);
        }
        context.fillStyle = 'rgb(84, 241, 84)';
        if(end[0] === "E"){
          context.fillText("E",200,128);
        }
        else if(end[0] === "F"){
          context.fillText("F",170,63); 
        }
        else if(end[0] === "K"){
          context.fillText("K",234,128);
        }
        else if(end[0] === "M"){
          context.fillText("M",268,128);
        }
        else if(end[0] === "J"){
          context.fillText("J",260,51);
        }
        else if(end[0] === "A"){
          context.fillText("A",27,125);
        }
        else if(end[0] === "T"){
          context.fillText("T",214,63);
        }
        else if(end[0] === "H"){
          context.fillText("H",212,33);
        }
    }
      rg();

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
                        context.moveTo(170, 65);
                        context.bezierCurveTo(210, 85, 245, 85, 265, 65);
                        context.stroke();
                      }
                      else if(prev.substr(0,1) == "E" && top.substr(0,1) == "M" || prev.substr(0,1) == "M" && top.substr(0,1) == "E"){
                        context.beginPath();
                        context.moveTo(200, 100);
                        context.bezierCurveTo(210, 70, 250, 70, 275, 100);
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
                        context.moveTo(170, 65);
                        context.bezierCurveTo(170, 90, 255, 60, 275, 100);
                        context.stroke();
                      }
                      else if(prev.substr(0,1) == "K" && top.substr(0,1) == "M" || prev.substr(0,1) == "M" && top.substr(0,1) == "K"){
                        context.beginPath();
                        context.moveTo(270, 100);
                        context.bezierCurveTo(270, 80, 240, 80, 240, 100);
                        context.stroke();
                      }
                      else if(prev.substr(0,1) == "E" && top.substr(0,1) == "A" || prev.substr(0,1) == "A" && top.substr(0,1) == "E"){
                        context.beginPath();
                        context.moveTo(190, 115);
                        context.bezierCurveTo(180, 95, 95, 125, 55, 115);
                        context.stroke();
                      }
                      else if(prev.substr(0,1) == "F" && top.substr(0,1) == "A" || prev.substr(0,1) == "A" && top.substr(0,1) == "F"){
                        context.beginPath();
                        context.moveTo(170, 65);
                        context.bezierCurveTo(160, 120, 120, 120, 55, 115);
                        context.stroke();
                      }
                      else if(prev.substr(0,1) == "H" && top.substr(0,1) == "J" || prev.substr(0,1) == "J" && top.substr(0,1) == "H"){
                        context.beginPath();
                        context.moveTo(233,40);
                        context.lineTo(240,50);
                        context.stroke();
                      }
                      else if(prev.substr(0,1) == "J" && top.substr(0,1) == "A" || prev.substr(0,1) == "A" && top.substr(0,1) == "J"){
                        context.beginPath();
                        context.moveTo(250, 65);
                        context.bezierCurveTo(260, 95, 95, 115, 55, 115);
                        context.stroke();
                      }
                      else if(prev.substr(0,1) == "M" && top.substr(0,1) == "A" || prev.substr(0,1) == "A" && top.substr(0,1) == "M"){
                        context.beginPath();
                        context.moveTo(55, 115);
                        context.bezierCurveTo(160, 125, 200, 75, 270, 100);
                        context.stroke();
                      }
                      else if(prev.substr(0,1) == "T" && top.substr(0,1) == "A" || prev.substr(0,1) == "A" && top.substr(0,1) == "T"){
                        context.beginPath();
                        context.moveTo(55, 115);
                        context.bezierCurveTo(100, 125, 210, 95, 220, 65);
                        context.stroke();
                      }
                      else if(prev.substr(0,1) == "T" && top.substr(0,1) == "E" || prev.substr(0,1) == "E" && top.substr(0,1) == "T"){
                        context.beginPath();
                        context.moveTo(200, 100);
                        context.bezierCurveTo(200, 100, 210, 95, 220, 65);
                        context.stroke();
                      }
                      else if(prev.substr(0,1) == "T" && top.substr(0,1) == "F" || prev.substr(0,1) == "F" && top.substr(0,1) == "T"){
                        context.beginPath();
                        context.moveTo(170, 65);
                        context.bezierCurveTo(180, 80, 210, 95, 220, 65);
                        context.stroke();
                      }
                      else if(prev.substr(0,1) == "M" && top.substr(0,1) == "H" || prev.substr(0,1) == "H" && top.substr(0,1) == "M"){
                        context.beginPath();
                        context.moveTo(232, 35);
                        context.bezierCurveTo(245, 35, 220, 75, 270, 100);
                        context.stroke();
                      }
                      else if(prev.substr(0,1) == "K" && top.substr(0,1) == "H" || prev.substr(0,1) == "H" && top.substr(0,1) == "K"){
                        context.beginPath();
                        context.moveTo(232, 35);
                        context.bezierCurveTo(245, 35, 230, 75, 240, 100);
                        context.stroke();
                      }
                      else if(prev.substr(0,1) == "T" && top.substr(0,1) == "H" || prev.substr(0,1) == "H" && top.substr(0,1) == "T"){
                        context.beginPath();
                        context.moveTo(220,45);
                        context.lineTo(220,50);
                        context.stroke();
                      }
                      else if(prev.substr(0,1) == "M" && top.substr(0,1) == "T" || prev.substr(0,1) == "T" && top.substr(0,1) == "M"){
                        context.beginPath();
                        context.moveTo(220, 65);
                        context.bezierCurveTo(220, 75, 220, 95, 270, 100);
                        context.stroke();
                      }
                      else if(prev.substr(0,1) == "J" && top.substr(0,1) == "T" || prev.substr(0,1) == "T" && top.substr(0,1) == "J"){
                        context.beginPath();
                        context.moveTo(220, 65);
                        context.bezierCurveTo(220, 75, 230, 95, 240, 40);
                        context.stroke();
                      }
                  } else {
                      newInstruction = "⚫️ Use connector ⚫️";
                      context.strokeStyle = "black";
                      context.fillStyle = 'white';
                      context.font = "10px Arial";
                      let txt = `(flr - ${prev.substr(1,1)})`;
                      if(prev.substr(0,1) == "M" && top.substr(0,1) == "J" || prev.substr(0,1) == "J" && top.substr(0,1) == "M"){
                        if(prev.substr(0,1) == "M"){
                          context.beginPath();
                          context.moveTo(280,100);
                          context.lineTo(280,65);
                          context.stroke();
                          id1 = setInterval(function f1(){
                          const date = new Date();
                          let seconds = date.getSeconds();
                          console.log(seconds);
                          context.clearRect(260,100,30,40);
                          context.fillStyle = '#006B88';
                          context.fillRect(260,100,30,40); 
                          if(seconds % 2==0){
                            context.font = "9px Arial";
                            context.fillStyle = 'yellow';
                            context.fillText(txt,262,122);      
                          }else{ 
                            context.fillStyle = 'white';
                            context.font = "13px Arial";  
                            context.fillText("M",268,128);     
                            rg();       
                        }},1000)
                        }                                               
                        else if(prev.substr(0,1) == "J"){
                          context.beginPath();
                          context.moveTo(280,100);
                          context.lineTo(280,65);
                          context.stroke();
                          id2 = setInterval(function f1(){
                            const date = new Date();
                            let seconds = date.getSeconds();
                            console.log(seconds);
                            context.clearRect(240,25,50,40);
                            context.fillStyle = '#006B88';
                            context.fillRect(240,25,50,40);
                            if(seconds % 2==0){
                              context.font = "9px Arial";
                              context.fillStyle = 'yellow';
                              context.fillText(txt,252,50);      
                            }else{  
                              context.fillStyle = 'white';
                              context.font = "13px Arial";  
                              context.fillText("J",260,51);  
                              rg();       
                          }},1000)
                        }

                      }
                      else if(prev.substr(0,1) == "M" && top.substr(0,1) == "K" || prev.substr(0,1) == "K" && top.substr(0,1) == "M"){
                        context.beginPath();
                        context.moveTo(255,120);
                        context.lineTo(260,120);
                        context.stroke();
                        if(prev.substr(0,1) == "M"){
                          id3 = setInterval(function f1(){
                          const date = new Date();
                          let seconds = date.getSeconds();
                          console.log(seconds);
                          context.clearRect(260,100,30,40);
                          context.fillStyle = '#006B88';
                          context.fillRect(260,100,30,40); 
                          if(seconds % 2==0){
                            context.font = "9px Arial";
                            context.fillStyle = 'yellow';
                            context.fillText(txt,262,122);      
                          }else{   
                            context.fillStyle = 'white';
                            context.font = "13px Arial";  
                            context.fillText("M",268,128);  
                            rg();       
                        }},1000)
                        }
                        else if(prev.substr(0,1) == "K"){
                          id4 = setInterval(function f1(){
                            const date = new Date();
                            let seconds = date.getSeconds();
                            console.log(seconds);
                            context.clearRect(225,100,30,40);
                            context.fillStyle = '#006B88';
                            context.fillRect(225,100,30,40);
                            if(seconds % 2==0){
                              context.font = "9px Arial";
                              context.fillStyle = 'yellow';
                              context.fillText(txt,227,122); 
                            }else{   
                              context.fillStyle = 'white';
                              context.font = "13px Arial";  
                              context.fillText("K",234,128);  
                              rg();       
                          }},1000)

                        }
                      }
                      else if(prev.substr(0,1) == "K" && top.substr(0,1) == "E" || prev.substr(0,1) == "E" && top.substr(0,1) == "K"){
                        context.beginPath();
                        context.moveTo(220,120);
                        context.lineTo(225,120);
                        context.stroke();
                        if(prev.substr(0,1) == "K"){
                          id5 = setInterval(function f1(){
                            const date = new Date();
                            let seconds = date.getSeconds();
                            console.log(seconds);
                            context.clearRect(225,100,30,40);
                            context.fillStyle = '#006B88';
                            context.fillRect(225,100,30,40);
                            if(seconds % 2==0){
                              context.font = "9px Arial";
                              context.fillStyle = 'yellow';
                              context.fillText(txt,227,122); 
                            }else{  
                              context.fillStyle = 'white';
                              context.font = "13px Arial";  
                              context.fillText("K",234,128);  
                              rg();       
                          }},1000)

                        }
                        else if(prev.substr(0,1) == "E"){
                          id6 = setInterval(function f1(){
                            const date = new Date();
                            let seconds = date.getSeconds();
                            console.log(seconds);
                            context.clearRect(190,100,30,40);
                            context.fillStyle = '#006B88';
                            context.fillRect(190,100,30,40);
                            if(seconds % 2==0){
                              context.font = "9px Arial";
                              context.fillStyle = 'yellow';
                              context.fillText(txt,192,122);
                            }else{  
                              context.fillStyle = 'white';
                              context.font = "13px Arial";  
                              context.fillText("E",200,128);  
                              rg();       
                          }},1000)
                        }
                      }
                      else if(prev.substr(0,1) == "E" && top.substr(0,1) == "F" || prev.substr(0,1) == "F" && top.substr(0,1) == "E"){
                        context.beginPath();
                        context.moveTo(193,65);
                        context.lineTo(193,100);
                        context.stroke();
                        if(prev.substr(0,1) == "E"){
                          id7 = setInterval(function f1(){
                            const date = new Date();
                            let seconds = date.getSeconds();
                            console.log(seconds);
                            context.clearRect(190,100,30,40);
                            context.fillStyle = '#006B88';
                            context.fillRect(190,100,30,40);
                            if(seconds % 2==0){
                              context.font = "9px Arial";
                              context.fillStyle = 'yellow';
                              context.fillText(txt,55,140);
                            }else{ 
                              context.fillStyle = 'white';
                              context.font = "13px Arial";  
                              context.fillText("E",200,128);       
                              rg();       
                          }},1000)
                        }
                        else if(prev.substr(0,1) == "F"){
                          id8 = setInterval(function f1(){
                            const date = new Date();
                            let seconds = date.getSeconds();
                            console.log(seconds);
                            context.clearRect(152,50,43,15);
                            context.fillStyle = '#006B88';
                            context.fillRect(152,50,43,15);
                            if(seconds % 2==0){
                              context.font = "9px Arial";
                              context.fillStyle = 'yellow';
                              context.fillText(txt,160,60);
                            }else{
                              context.fillStyle = 'white';
                              context.font = "13px Arial";  
                              context.fillText("F",170,63);        
                              rg();       
                          }},1000)
                        }
                      }
                      else if(prev.substr(0,1) == "K" && top.substr(0,1) == "J" || prev.substr(0,1) == "J" && top.substr(0,1) == "K"){
                        context.beginPath();
                        context.moveTo(250,100);
                        context.lineTo(250,65);
                        context.stroke();
                        if(prev.substr(0,1) == "K"){
                          id9 = setInterval(function f1(){
                            const date = new Date();
                            let seconds = date.getSeconds();
                            console.log(seconds);
                            context.clearRect(225,100,30,40);
                            context.fillStyle = '#006B88';
                            context.fillRect(225,100,30,40);
                            if(seconds % 2==0){
                              context.font = "9px Arial";
                              context.fillStyle = 'yellow';
                              context.fillText(txt,227,122); 
                            }else{  
                              context.fillStyle = 'white';
                              context.font = "13px Arial";  
                              context.fillText("K",234,128);      
                              rg();       
                          }},1000)
                        }
                        else if(prev.substr(0,1) == "J"){
                          id10 = setInterval(function f1(){
                            const date = new Date();
                            let seconds = date.getSeconds();
                            console.log(seconds);
                            context.clearRect(240,25,50,40);
                            context.fillStyle = '#006B88';
                            context.fillRect(240,25,50,40);
                            if(seconds % 2==0){
                              context.font = "9px Arial";
                              context.fillStyle = 'yellow';
                              context.fillText(txt,252,50);      
                            }else{  
                              context.fillStyle = 'white';
                              context.font = "13px Arial";  
                              context.fillText("J",260,51);      
                              rg();       
                          }},1000)
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
   
      function fsmtg(){
        clearInterval(id1);
        clearInterval(id2);
        clearInterval(id3);
        clearInterval(id4);
        clearInterval(id5);
        clearInterval(id6);
        clearInterval(id7);
        clearInterval(id8);
        clearInterval(id9);
        clearInterval(id10);
      }


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
      },
      "am": {
      "Mon": ["NULL", "23SA12:M504", "23SA16:J513", "NULL", "23SA14:H203", "TWM:H203", "NULL", "NULL"],
      "Tue": ["23SA13:A112", "23SA17:A112", "23SA15:A112", "23SA11:A112", "23SA14:A112", "23SA12:A112", "SMR:A112", "NULL"],
      "Wed": ["23SA18:CSRL", "23SA18:CSRL", "23SA15:A112", "23SA12:A112", "23SA11:M504", "23SA14:M504", "NULL", "NULL"],
      "Thu": ["23SA18:CSRL", "23SA18:CSRL", "23SA14:A112", "23SA11:A112", "23SA15:A112", "23SA16:A112", "23SA13:A112", "NULL"],
      "Fri": ["NULL", "23SA14:M202", "NULL", "23SA12:J515", "23SA17:M202", "23SA16:M202", "23SA13:M202", "NULL"]
      },
      "csd": {
      "Mon": ["NULL", "24X101:A106", "24X103:A106", "24X102:A106", "NULL", "23X105:A106", "23X106:UGCC", "23X106:UGCC"],
      "Tue": ["NULL", "24X104:A106", "24X103:A106", "24X101:A106", "24X108:physics", "24X108:physics", "24X108:physics", "NULL"],
      "Wed": ["24X107:UGCC", "24X107:UGCC", "24X102:A106", "24X104:A106", "NULL", "24X105:A106", "SMR:A106", "NULL"],
      "Thu": ["24X106:UGCC", "24X106:UGCC", "24X104:A106", "24X103:A106", "24X101:A106", "TWM:A106", "24X107:UGCC", "24X107:UGCC"],
      "Fri": ["NULL", "24X105:A106", "24X101:A106", "24X104:A106", "NULL", "24X103:A106", "24X102:A105", "NULL"]
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
  else if(csd.checked){
    d = "csd";
  }
  else if(am.checked){
    d = "am";
  }
  else{
    alert("please select your programme!");
    return dest;
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
    //s = 'Mon';
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
  
  } else if (((parseInt(period.substr(5, 1)) > 5 && (d !== "tcs" || parseInt(period.substr(4,2)) !== 18 )) || (s === 'Mon' && d === "ds" && parseInt(period.substr(4,2)) === 12)) && (d !== "am" || parseInt(period.substr(5,1)) === 8)) {
    oup = `${period.substr(0,6)}\n`;
    const labs = ["CSL-1", "CSL-3" , "DSL", "OSL", "SIL", "OCL", "IAL", "NSL", "SCL","physics","UGCC","CSRL"];
    const labCode = period.substr(7);
    const labIndex = labs.indexOf(labCode);
    const labDest = ["M0", "M0" , "M0", "M1", "M2", "E3", "J4", "J3" , "F3", "M0","M4","M0"];
    
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
  else if(csd.checked){
    classKey = "csd";
  }
  else if(am.checked){
    classKey = "am";
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

context.fillStyle = '#006B88';

context.fillRect(152,50,43,15); //f

context.fillRect(190,100,30,40); //e

context.fillRect(225,100,30,40); //k

context.fillRect(240,25,50,40); //j

context.fillRect(260,100,30,40); //m


context.fillRect(10,95,45,45); //a

context.fillRect(203,50,30,15); //t

context.fillRect(203,10,30,35); //h

context.fillStyle = 'grey';

context.fillRect(127,38,20,46); //g

context.fillRect(87,89,60,15); //d

context.fillRect(60,55,20,50); //y

context.fillRect(60,10,120,18); //i

context.fillRect(65,123,17,17); //c

context.fillRect(10,55,40,25); //b

context.fillStyle = 'white';
context.font = "13px Arial";
context.fillText("F",170,63);
context.fillText("E",200,128);
context.fillText("K",234,128);
context.fillText("M",268,128);
context.fillText("J",260,51);
context.fillText("A",27,125);
context.fillText("G",131,64);
context.fillText("D",112,102);
context.fillText("Y",65,88);
context.fillText("T",214,63);
context.fillText("H",212,33);
context.fillText("I",115,24);
context.fillText("B",25,73);
context.fillText("C",69,136);

setInterval(countdown,1000);

/*
adding new block:
change the 3 for loops
change the block verification
links
 */