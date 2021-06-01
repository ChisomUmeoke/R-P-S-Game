    const playRps = () => {
        const cDisplayer = document.getElementById('cpdisplayer');
        const pDisplayer = document.getElementById('pdisplayer');
        const alert = document.getElementById('status');
        const compSelection = document.getElementById('compSelection');
        const pdisplay = document.querySelector('.pdisplay');

        //the selection tools
        const values = ['rock', 'paper', 'scissors'];
        const selections = [
            '<img src="images/rock.png" alt="rock" width=15%>',
            '<img src="images/paper.png" alt="paper" width=15%>',
            '<img src="images/scissors.png" alt="scissor" width=15%>'
        ];

        const playAgainBtn = document.getElementById('play-again');
        playAgainBtn.style.display = 'none'; //button can only appear when first selection has been made

        const computerPlay = () => {
            const round = Math.floor(Math.random() * 3);
            compSelection.innerHTML = selections[round];
            return round;
        }

        const startComputer = () => setInterval(() => {
            computerPlay();
        }, 100);

        let interval = startComputer();//setting intervals to computer display

// conditions fpr showing winner
         const showWinner = (computer, player) => {
            if (computer === player) {
                alert.innerHTML = "Tie";
                alert.style.color = 'Black';
            }


                else if (player === 'scissors' && computer === 'rock')  {
                    pDisplayer.innerHTML = Number(pDisplayer.innerHTML) + 1;
                    alert.innerHTML = "You Win";
                    alert.style.color = 'green';
                }


            else if (player === 'scissors' && computer === 'paper')  {
                    pDisplayer.innerHTML = Number(pDisplayer.innerHTML) + 1;
                    alert.innerHTML = "You Win";
                    alert.style.color = 'Green';
                }
            

                else if (player === 'paper' && computer === 'rock')  {
                    pDisplayer.innerHTML = Number(pDisplayer.innerHTML) + 1;
                    alert.innerHTML = "You Win";
                    alert.style.color = 'Green';
                }

                else{
                    cDisplayer.innerHTML = Number(cDisplayer.innerHTML) + 1;
                    alert.innerHTML = "Computer Win";
                    alert.style.color = 'red';  
                }
            }


        const playAgain = () => {
            interval = startComputer();
            playAgainBtn.style.display = 'none';
        }
        playAgainBtn.addEventListener('click', () => {
            playAgain();
        });
        //loop for adding event listener to players selection
        const selectorsElement = document.querySelectorAll('.p-selection');
        for (let i = 0; i < 3; i++) {
            selectorsElement[i].addEventListener('click', () => {
                const playerValue = selectorsElement[i].dataset.value;//this picks the data-value selection from the HTML
                pdisplay.innerHTML = selections[playerValue];//displays player selection
                clearInterval(interval);//stops the interval count to display computer selection
                const computerRand = computerPlay();
                showWinner(values[computerRand], values[playerValue]);//show winer
                playAgainBtn.style.display = 'block';
            });
        }

    }
    playRps()


