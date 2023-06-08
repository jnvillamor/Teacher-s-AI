import QuizGenerateCard from "./QuizGenerateCard";
import Header from "../Header";
import GenerateButton from "./GenerateButton";
import AddButton from "./AddButton";
import { useEffect, useState } from "react";

export default function QuizGeneratePage() {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    console.log("fetching")
    const response = await fetch("http://localhost:8000/api/generate_quiz/");
    const data = await response.json();
    console.log(data.data);
    setQuestions(data.data.questions);
  }
  const [analysis, setAnalysis] = useState([]);

  const fetchAnalysis = async () => {
    console.log("fetching")
    const response = await fetch("http://localhost:8000/api/analyze_quiz/");
    const data = await response.json();
    console.log(data.data);
    setAnalysis(data.data);
  }

  useEffect( () => {
    let mounted = true
    if (mounted)
      fetchQuestions();
      fetchAnalysis();
    return () => mounted = false;
  }, [])
  return (
    <div className="col-span-4 px-14">
      <Header />
      {questions.map( question => {
        return <QuizGenerateCard key={question.answer} question={question.question} answer={question.answer}/>
      })}
      <AddButton />
      <GenerateButton />
      <div className="text-white h-[400px]">
        <h2 className="text-white text-[50px]">Analysis:</h2>
        <p className="text-whtie text-[25px]">{analysis}</p>
      </div>
    </div>
  );
}
