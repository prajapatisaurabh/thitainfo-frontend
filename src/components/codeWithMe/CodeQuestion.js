import React from "react";
import { questionData } from "./constant";
import { Table } from "reactstrap";
import "./Code.css";
import { useNavigate } from "react-router-dom";

const CodeQuestion = ({ navigateTo }) => {
  const navigate = useNavigate();
  const questionList = questionData.find(
    (data) => data.navigateId === navigateTo
  );
  let renderdata;
  if (questionList) {
    renderdata = (
      <Table borderless hover responsive size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {questionList.questions.map((que, index) => (
            <tr
              onClick={() => {
                navigate(`/codes/${que.id}`);
              }}
              style={{ cursor: "pointer" }}
              key={index}
            >
              <th scope="row">{index + 1}</th>
              <td>{que.question}</td>
              <td>Easy</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  } else {
    renderdata = (
      <Table borderless hover responsive size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Unable to load question</td>
            <td>Please try again</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  return renderdata;
};

export default CodeQuestion;
