var e=`<!-- markdownlint-disable-next-line MD025 -->
<h1 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview">#</a></h1>
<h2 id="lurk-server" tabindex="-1"><a href="https://github.com/The24Kings/ZeldaServer" target="_blank" rel="noopener noreferrer">Lurk Server</a> <a class="header-anchor" href="#lurk-server">#</a></h2>
<blockquote>
<p>Server/ Client for a text based Dungeon Crawler game using the <a href="https://github.com/The24Kings/LurkProtocol/wiki/" target="_blank" rel="noopener noreferrer">Lurk Server Protocol</a> created by S. Seth Long, Ph.D</p>
</blockquote>
<p>The Lurk protocol is intended to support text-based MMORPG-style games, also known as MUDs (Multi-User Dimension).</p>
<p>It consists of 14 types of message, some of which are primarily sent by servers and some by clients. Behavior and game rules are primarily defined by the server, and clients should expect that their character may be updated with different health, location, and wealth at any time.</p>
<p>The server is responsible for all computation related to game rules, results of battles, or collecting gold. The client is responsible for communicating with the server and interacting with the player.</p>
<pre><code class="hljs language-TXT"> ______    _     _           _____
|___  /   | |   | |         / ____|
   / / ___| | __| | __ _   | (___   ___ _ ____   _____ _ __
  / / / _ \\ |/ _\` |/ _\` |   \\___ \\ / _ \\ &#x27;__\\ \\ / / _ \\ &#x27;__|
 / /_|  __/ | (_| | (_| |   ____) |  __/ |   \\ V /  __/ |
/_____\\___|_|\\__,_|\\__,_|  |_____/ \\___|_|    \\_/ \\___|_|

You find yourself standing in front of the gaping maw of a towering tree.
You hear a booming voice from above telling you to enter, but beware for danger lay ahead!

         @@@@@@@@@@@@@@@@@@@@@@@@@@@@
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@  &#x27;.@@@@@@@@@@@@@@@@@.--.@@@@@@@@@
    @@@@@@@@\\   @@  Â¯ @@@@@@@@@@@ &#x27;Â¯Â¯ ___..@@@@@@
     @@@@@@@@|                 @    .&#x27;@@@@@@@@@@
        @@@@@@\\                    /@@@@@@@@
               \\                  /
               |   .--&#x27;|__|&#x27;--.   |
               |  /.--&#x27;/  \\&#x27;--.\\  |
   __  ___     /      /____\\      \\     ___
 _(  )(   )_  |     .&#x27; .&#x27;&#x27;. &#x27;.     |  _(   )__  __      __
(           )_|    |__/    \\__|    |_(        )(  )_   (
             /                      \\__             )_(Â¯
_______.---./    .&#x27;                    \\_.--._ ___________
  --&#x27;&#x27;Â¯        _/    __                       &#x27;--..
             &#x27;&#x27;    .&#x27;
</code></pre>
<p>My Lurk Server was written primarily in Rust. The server is currently undergoing a complete rewrite from the ground up, however, the client currently only connects to the server and receives the <a href="https://github.com/The24Kings/LurkProtocol/wiki/Messages:-Types#Game" target="_blank" rel="noopener noreferrer">GAME</a> and <a href="https://github.com/The24Kings/LurkProtocol/wiki/Messages:-Types#Version" target="_blank" rel="noopener noreferrer">VERSION</a> messages.</p>
<hr>
<h2 id="budgetcraft" tabindex="-1"><a href="https://github.com/The24Kings/BudgetCraft" target="_blank" rel="noopener noreferrer">BudgetCraft</a> <a class="header-anchor" href="#budgetcraft">#</a></h2>
<blockquote>
<p>Capstone Design Development Project</p>
</blockquote>
<p>BudgetCraft is a Personal Finance Manager developed with <a href="https://ionicframework.com/" target="_blank" rel="noopener noreferrer">Ionic</a> and <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">Firebase</a>.</p>
<p>As the Product Owner, my job in the scrum development framework, I am accountable for maximizing the value of the product resulting from the work of the Scrum Team. I am taking the stance of the Visionary to clearly communicate the product vision, strategy, business goals, and objectives with all the relevant parties.</p>
<p><a class="expandable-img-trigger" href="#lightbox-https-isoptera-lcsc-edu-rjziegler-pictures-capstone-poster-png"><img src="https://isoptera.lcsc.edu/~rjziegler/pictures/capstone-poster.png" alt="Budget Craft Poster" loading="lazy" /></a><a href="#" class="expandable-img-overlay" id="lightbox-https-isoptera-lcsc-edu-rjziegler-pictures-capstone-poster-png"><img src="https://isoptera.lcsc.edu/~rjziegler/pictures/capstone-poster.png" alt="Budget Craft Poster" /></a></p>
<p class="subtext subtext-caption">The poster we presented at the annual <a href="https://www.lcsc.edu/academic-affairs/research-symposium" target="_blank" rel="noopener noreferrer">LCSC Research Symposium</a></p>
<hr>
<h2 id="normal-elevator" tabindex="-1"><a href="https://github.com/The24Kings/NormalElevator" target="_blank" rel="noopener noreferrer">Normal Elevator</a> <a class="header-anchor" href="#normal-elevator">#</a></h2>
<blockquote>
<p>Based on the popular GMOD map created by <a href="https://www.pixeltailgames.com/elevator/" target="_blank" rel="noopener noreferrer">PixelTail Games</a> and heavily inspired by <a href="https://www.youtube.com/channel/UCHobjD55wR4c-5bD0AHDcEQ" target="_blank" rel="noopener noreferrer">ThePebblePrince</a></p>
</blockquote>
<p>Normal Elevator is a multiplayer game made using Minecraft commands (scripting) that takes players to random wacky floors. These floors can consist of anything ranging from the jungle, to the middle of the desert, and back to an office building. Each player will be taken to 10 different floors, can you visit them all and find all their secrets?</p>
<p><a class="expandable-img-trigger" href="#lightbox-https-isoptera-lcsc-edu-rjziegler-pictures-elevator-entrance-png"><img src="https://isoptera.lcsc.edu/~rjziegler/pictures/elevator_entrance.png" alt="Minecraft Map" loading="lazy" /></a><a href="#" class="expandable-img-overlay" id="lightbox-https-isoptera-lcsc-edu-rjziegler-pictures-elevator-entrance-png"><img src="https://isoptera.lcsc.edu/~rjziegler/pictures/elevator_entrance.png" alt="Minecraft Map" /></a></p>
<p class="subtext subtext-caption">The lobby for Normal Elevator.</p>
<hr>
<h2 id="sine-approximation" tabindex="-1"><a href="https://github.com/The24Kings/Sine-Approximation" target="_blank" rel="noopener noreferrer">Sine Approximation</a> <a class="header-anchor" href="#sine-approximation">#</a></h2>
<p>Particle Swarm Optimizer (PSO) to train a Feed Forward Neural Network (FFNN) for the task of approximating the sine function. The main objective is to explore the capabilities of PSO in optimizing the weights of a neural network and achieving an accurate approximation of the sine wave. The problem is tackled by training a neural network to predict values of the sine function given a set of input values using a Mean Squared Error for particle fitness.</p>
<p><a class="expandable-img-trigger" href="#lightbox-https-isoptera-lcsc-edu-rjziegler-pictures-sine-approx-png"><img src="https://isoptera.lcsc.edu/~rjziegler/pictures/sine-approx.png" alt="Sin Wave" loading="lazy" /></a><a href="#" class="expandable-img-overlay" id="lightbox-https-isoptera-lcsc-edu-rjziegler-pictures-sine-approx-png"><img src="https://isoptera.lcsc.edu/~rjziegler/pictures/sine-approx.png" alt="Sin Wave" /></a></p>
<p class="subtext subtext-caption">The graphical output for the Sine Approximation program<br>Blue = Expected, Red = Predicted, Black = Particle Velocity</p>
<hr>
<h2 id="website" tabindex="-1"><a href="https://github.com/The24Kings/whoami" target="_blank" rel="noopener noreferrer">Website</a> <a class="header-anchor" href="#website">#</a></h2>
<p>The source code for this website, which was built with React, TypeScript, and Vite; it serves as a portfolio of sorts for my various projects and applications</p>
`;export{e as html};