import { useEffect, useState } from "react";
import axiosInstance from "../apis/axiosInstance";
import React from "react";
import { FaRandom, FaBook } from "react-icons/fa";
function QuranVerse() {
  const [surahName, setSurahName] = useState("");
  const [surahNumber, setSurahNumber] = useState(0);
  const [ayahNumber, setAyahNumber] = useState(0);
  const [randomAyah, setRandomAyah] = useState({});
  const [randomTafsirAyah, setRandomTafsirAyah] = useState({});
  const [showTafsir, setShowTafsir] = useState(false);
  const getRandomSurahNumber = Math.round(Math.random() * 114);

  const getSurah = async (surahNumber) => {
    const { data } = await axiosInstance.get(`surat/${surahNumber}`);
    return data.data;
  };

  const getTafsir = async (surahNumber) => {
    const { data } = await axiosInstance.get(`tafsir/${surahNumber}`);
    return data.data;
  };

  const getRandomAyah = async (randomNum) => {
    const randomSurah = await getSurah(randomNum);
    const randomTafsir = await getTafsir(randomNum);
    let randomAyahNumber = Math.round(
      Math.random() * (randomSurah.ayat.length - 1)
    );

    if (randomAyahNumber < 0) {
      randomAyahNumber = 0;
    }
    if (randomAyahNumber > randomSurah.ayat.length - 1) {
      randomAyahNumber = randomSurah.ayat.length - 1;
    }
    setSurahName(randomSurah.namaLatin);
    setSurahNumber(randomSurah.nomor);
    setAyahNumber(randomAyahNumber);
    setRandomAyah(randomSurah.ayat[randomAyahNumber]);
    setRandomTafsirAyah(randomTafsir.tafsir[randomAyahNumber]);
  };

  useEffect(() => {
    getRandomAyah(getRandomSurahNumber);
  }, []);

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-[#fff8f0] p-4">
      <div className="flex flex-col w-full justify-center items-center align-middle bg-[#f8ccbc] text-[#000000] rounded-lg shadow-lg p-6 relative z-10">
        <h1 className="text-4xl font-bold mb-4 text-center text-[#000000]">
          Quran Verse Generator
        </h1>
        <div className="text-lg mb-4 text-center text-[#333333]">
          <span className="font-semibold">
            {surahName} {surahNumber}:{ayahNumber}
          </span>
        </div>
        <div className="text-3xl font-bold mt-2 mb-4 text-center text-[#e8a546] font-arabic">
          {randomAyah.teksArab}
        </div>
        <div className="text-lg mb-4 text-center italic text-[#5a5a5a]">
          {randomAyah.teksLatin}
        </div>
        <div className="text-lg mb-6 text-center text-[#333333]">
          &ldquo;{randomAyah.teksIndonesia}&rdquo;
        </div>
        {showTafsir && (
          <div className="h-[120px] overflow-y-auto bg-[#fce4d6] p-4 rounded-md shadow-inner mb-4">
            <div>{randomTafsirAyah.teks}</div>
          </div>
        )}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => {
              setShowTafsir(!showTafsir);
            }}
            className="bg-[#f7a83b] text-[#ffffff] px-6 py-2 rounded-lg shadow-md hover:bg-[#e98a22] transition duration-300 flex items-center space-x-2"
          >
            <FaBook className="text-lg" />
            <span>{showTafsir ? "Hide Tafsir" : "Show Tafsir"}</span>
          </button>
          <button
            onClick={() => getRandomAyah(getRandomSurahNumber)}
            className="bg-[#4CAF50] text-[#ffffff] px-6 py-2 rounded-lg shadow-md hover:bg-[#45a049] transition duration-300 flex items-center space-x-2"
          >
            <FaRandom className="text-lg" />
            <span>Randomize</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuranVerse;
