import React from 'react';
import styled from 'styled-components';

const newsletterData = [
  {
    title: 'Team news',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT28TfzqFGE5nRw9XsiU5n7_XRu9maihWScA&usqp=CAU',
  },
  {
    title: 'Company news',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jm8_bekyEd3dmly59alcNQQeO4ceMSKz1Q&usqp=CAU'
  },
  {
    title: 'Project news',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7fpciRb37tPfmQ_f18okCSt4w-3u4nlfMg0u330ZfgUgJwOUU-kLh4T9HHBCAqOcgZk&usqp=CAU'
  },
];

const Newsletter = () => {
  return (
    <Wrapper>
      <h2>Newsletter</h2>
    <div className="newsletter">
      {newsletterData.map((item, index) => (
        <div key={index} className="newsletter-item">
          <img src={item.Image}></img>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <button>Read More</button>
        </div>
      ))}
    </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
h2{
  text-align:center;
}
.newsletter {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
}

.newsletter h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.newsletter-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
}

.newsletter-item img {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.newsletter-item h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.newsletter-item p {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}
.newsletter-item button {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
}


`
export default Newsletter;
