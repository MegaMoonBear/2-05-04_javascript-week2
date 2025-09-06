const userName = prompt("What is your name?");
            if (userName !== "") {
                document.getElementById("greeting").textContent = `${userName}, "welcome" from Apopo's “HeroRATs”!`;
            } else {
                document.getElementById("greeting").textContent = "Welcome" from Apopo's “HeroRATs”!";
            }
