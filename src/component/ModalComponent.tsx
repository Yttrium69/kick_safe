// ModalComponent.jsx

import React, { useState } from 'react';
import Modal from 'react-modal';
import JanOneyoung from '../images/celebrity/jangoneyoung.png';
import dlwlrma from '../images/celebrity/dlwlrma.png';
import Gosu from '../images/celebrity/gosu.png';
import OneBin from '../images/celebrity/onebin.png';
import Sana from '../images/celebrity/sana_img.png';
import Sonayoung from '../images/celebrity/sonaun.png';
import Chaunu from '../images/celebrity/chaunu.png';
import ParkBoGum from '../images/celebrity/parkbogum.png';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface Random_inside {
  question: string;
  imageUrl: string;
  celebrityName: string;
  percentage: string;
  statement: string;
}

const ModalComponent: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {
  const randomInsideDataArray: Random_inside[] = [
    {
      question: '나와 닮은 두상의 연예인은?',
      imageUrl: JanOneyoung,
      celebrityName: '아이즈원 장원영',
      percentage: '1%',
      statement: '우아하고 엘레강스한 당신! 장두형 두상을 가지셨군요! 장두형 타입은 범접하기 힘든 아우라를 갖는 특징이 있어요. 오늘도 헬멧을 착용하고 안전주행해 주셔서 감사합니다!',
    },
    {
      question: '나와 닮은 두상의 연예인은?',
      imageUrl: dlwlrma,
      celebrityName: '아이유',
      percentage: '4%',
      statement: '큐티하고 러블리한 당신! 단두형 두상을 가지셨군요! 단두형 타입은 모두에게 사랑받는 특징이 있어요. 오늘도 헬멧을 착용하고 안전주행해 주셔서 감사합니다!',
    },
    {
      question: '나와 닮은 두상의 연예인은?',
      imageUrl: Gosu,
      celebrityName: '고 수',
      percentage: '11%',
      statement: '완벽한 무결점에 당신! 단두형 두상을 가지셨군요! 단두형 타입은 모두를 홀리게 하는 특징이 있어요. 오늘도 헬멧을 착용하고 안전주행해 주셔서 감사합니다!',
    },
    {
      question: '나와 닮은 두상의 연예인은?',
      imageUrl: OneBin,
      celebrityName: '원 빈',
      percentage: '3%',
      statement: '완벽한 무결점에 당신! 단두형 두상을 가지셨군요! 단두형 타입은 모두를 홀리게 하는 특징이 있어요. 오늘도 헬멧을 착용하고 안전주행해 주셔서 감사합니다!',
    },
    {
      question: '나와 닮은 두상의 연예인은?',
      imageUrl: Sana,
      celebrityName: '사 나',
      percentage: '11%',
      statement: '우아하고 엘레강스한 당신! 장두형 두상을 가지셨군요! 장두형 타입은 범접하기 힘든 아우라를 갖는 특징이 있어요. 오늘도 헬멧을 착용하고 안전주행해 주셔서 감사합니다!',
    },
    {
      question: '나와 닮은 두상의 연예인은?',
      imageUrl: Sonayoung,
      celebrityName: '손나은',
      percentage: '4%',
      statement: '큐티하고 러블리한 당신! 단두형 두상을 가지셨군요! 단두형 타입은 모두에게 사랑받는 특징이 있어요. 오늘도 헬멧을 착용하고 안전주행해 주셔서 감사합니다!',
    },
    {
      question: '나와 닮은 두상의 연예인은?',
      imageUrl: Chaunu,
      celebrityName: '차은우',
      percentage: '7%',
      statement: '훈훈하고 빛이 나는 당신! 장두형 두상을 가지셨군요! 장두형 타입은 범접하기 힘든 아우라를 갖는 특징이 있어요. 오늘도 헬멧을 착용하고 안전주행해 주셔서 감사합니다!',
    },
    {
      question: '나와 닮은 두상의 연예인은?',
      imageUrl: ParkBoGum,
      celebrityName: '박보검',
      percentage: '4%',
      statement: '훈훈하고 빛이 나는 당신! 장두형 두상을 가지셨군요! 장두형 타입은 범접하기 힘든 아우라를 갖는 특징이 있어요. 오늘도 헬멧을 착용하고 안전주행해 주셔서 감사합니다!',
    },
    // Add more data objects as needed
  ];

  // Randomly select one set of data
  const randomInsideData: Random_inside = randomInsideDataArray[Math.floor(Math.random() * randomInsideDataArray.length)];

  return (
    <Modal className={'modal_container'} isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Modal">
      <div className='modal_box'>
        <div className='title'>Event</div>
        <div className='sub_title'>{randomInsideData.question}</div>
        <div><img className='image_box' src={randomInsideData.imageUrl} alt={randomInsideData.celebrityName} /></div>
        <div className='celebrity_Name'>{randomInsideData.celebrityName}</div>
        <div className='popular'>전체 이용자 중 {randomInsideData.percentage}</div>
        <div className='descrpt'>{randomInsideData.statement}</div>
        <button className='exit_btn' onClick={onRequestClose}>확인</button>
      </div>
    </Modal>
  );
};

export default ModalComponent;
