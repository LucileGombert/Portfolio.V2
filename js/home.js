// Canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const partciclesArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener('click', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 10; i++) {
    partciclesArray.push(new Particle());
  }
});
 

canvas.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 5; i++) {
    partciclesArray.push(new Particle());
  }
});


function drawCircle() {
  ctx.fillStyle = '#2fa09c';
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2);
  ctx.fill();
}
const settings = {
  colors: ['#e3f5f4', '#92d5d0', '#66ccc4', '#38bcb3', '#07a298'],
};

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = settings.colors[Math.round(Math.random() * settings.colors.length)]; 
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.size >= 0.32) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath(); 
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function handleParticles() {
  for(let i = 0; i < partciclesArray.length; i++) {
    partciclesArray[i].update();
    partciclesArray[i].draw();
    for(let j = i; j < partciclesArray.length; j++) {
      const dx = partciclesArray[i].x - partciclesArray[j].x;
      const dy = partciclesArray[i].y - partciclesArray[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if(distance < 100) {
        ctx.beginPath();
        ctx.strokeStyle = partciclesArray[i].color;
        ctx.lineWidth = 0.2;
        ctx.moveTo(partciclesArray[i].x, partciclesArray[i].y);
        ctx.lineTo(partciclesArray[j].x, partciclesArray[j].y);
        ctx.stroke();
        ctx.closePath();
      }
    }
    if(partciclesArray[i].size <= 0.3) {
      partciclesArray.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}
animate();

// Canvas mobilephone
window.onload = function () {
  Particles.init({
    selector: ".background"
  });
};
var particles = Particles.init({
  selector: ".background",
  color: ['#03dac6', '#e3f5f4', '#66ccc4'],
  connectParticles: true,
});


//Typewritter title
class Typewritter {
  constructor({ text, time = 300 }) {
    this.texts = text.split(",");
    this.sT = document.querySelector(".secondary__title");
    this.realTime = time; 
    this.wait = time + 1000; 
    this.changeTime = 0;
    this.length = this.texts.length;
    this.countChar = 0; 
    this.current = 0;
    this.flag = false;
    this.cutText();
  }

  cutText() {
    const text = this.texts[this.current];
    const tLength = this.texts[this.current].length;
    
    
    if (this.countChar === tLength) {
      this.changeTime = this.wait;
    } 
    
    
    if (this.flag && this.countChar === tLength - 1) {
      this.changeTime = this.realTime / 4;
    }
      
    
    if (this.countChar === 0) {
      this.changeTime = this.realTime;
    }

    this.drawText(text.substr(0, this.countChar));
 
    if (!this.flag) {
      this.countChar++;
      if (this.countChar === tLength) {
        this.flag = true;
      }
    } else if (this.flag) {
      this.countChar--;
      if (this.countChar === 0) {
        this.flag = false;
        this.current = ++this.current % this.length;
      }
    }

    setTimeout(() => this.cutText(), this.changeTime);
  }

  drawText(chars) {
    this.sT.innerHTML = chars;
  }
}

new Typewritter({
  text: "Lucile Gombert,développeuse web",
  time: 100
});












