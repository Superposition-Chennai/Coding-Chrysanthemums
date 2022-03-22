import { Cancel, Close, Home } from '@mui/icons-material';
import {Dialog, DialogActions, DialogContent, IconButton, LinearProgress, List, ListItem, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import celeb from '../img/Celebration-pana.svg'

export default function Quiz() {
	const questions = [
		{
			questionText: 'Who is known as the world\'s first programmer?',
			answerOptions: [
				{ answerText: 'Grace Hopper', isCorrect: false },
				{ answerText: 'Betty Holberton', isCorrect: false },
				{ answerText: 'Ada Lovelace', isCorrect: true },
				{ answerText: 'Edith Clarke', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the first female video game designer?',
			answerOptions: [
				{ answerText: 'Dame Stephanie', isCorrect: false },
				{ answerText: 'Carol Shaw', isCorrect: true },
				{ answerText: 'Frances Brazier', isCorrect: false },
				{ answerText: 'Ida Rhodes', isCorrect: false },
			],
		},
		{
			questionText: 'Who was concerned with creating work opportunities for women with dependants, and predominantly employed women, only 3 out of 300-odd programmers were male?',
			answerOptions: [
				{ answerText: 'Dame Stephanie', isCorrect: true },
				{ answerText: 'Grace Hopper', isCorrect: false },
				{ answerText: 'Evelyn Bond', isCorrect: false },
				{ answerText: 'Dana Ulery', isCorrect: false },
			],
		},
		{
			questionText: 'Which project has Adele Goldberg not worked on?',
			answerOptions: [
				{ answerText: 'Smalltalk-80', isCorrect: false },
				{ answerText: 'Apple Mac', isCorrect: false },
				{ answerText: 'Simula 67', isCorrect: false },
				{ answerText: 'EDSAC', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
    const [open, setOpen] = useState(true);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
      const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <Close fontSize="small" />
          </IconButton>
        </React.Fragment>
      );
    let message = "You have scored " + score +" out of "+ questions.length;
	return (
		<div className='App' style={{
                fontFamily: "Poppins",
                width: "100%",
                alignContent: "center",
                padding: "2%"}}>
                    <h2>Quiz Me</h2>
                    <h4>Take a Quiz on famous women in tech</h4>
			{showScore ? (
                <>
                <Snackbar open={open}
                autoHideDuration={6000}
                message={message}
                onClose={handleClose}
                action={action}>
                </Snackbar>
                <h4 style={{fontWeight:"600", textDecorationLine:"underline", textDecorationStyle:"wavy"}}>{message} <Link to="/inspiration"><IconButton><Home/></IconButton></Link></h4>
                <img src={celeb} alt="celeb" className='celeb' width="400px"/>
                </>
			) : (
        <Dialog open={true} sx={{fontFamily:"Poppins"}}>
        
            <DialogContent>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
                            <LinearProgress variant='determinate' value={((currentQuestion+1)/questions.length)*100} color="secondary"/>
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<List className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<ListItem button divider onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</ListItem>
						))}
					</List>

        <DialogActions>
        <Link to="/inspiration"><IconButton><Cancel/></IconButton></Link>
        </DialogActions>
        </DialogContent>
        
        </Dialog>
			)}
		</div>
	);
}