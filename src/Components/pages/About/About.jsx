import React from 'react';
import SectionForm from '../../Main/SectionForm/SectionForm';
import about_img from "./../../../IMG/about_pic.png";

export default function About() {
  const dataForAbout = [
    {
      id: "about-info",
      text_1: "Adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf. Ia tidak hanya bertahan selama 5 abad, tapi juga telah beralih ke penataan huruf elektronik, tanpa ada perubahan apapun. Ia mulai dipopulerkan pada tahun",
      text_2: "Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu.",
      text_3: `Это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.`,
      text_4: "Комплексный подход к диагностике и лечению пациента, повышенные требования к качеству медицинской помощи и сервису, полное сопровождение пациента на всех этапах лечения, инновации, доступность и своевременность медицинской помощи — визитная карточка медицинского центра «Пульс».",
      ul: {
        '1': "своевременность и точность диагностики,",
        "2": "успешность и качество лечения,",
        "3": "этика и теплота общения,",
        "4": "комфорт пребывания,"
      },
      img: about_img,
    }
  ]
  return (
    <div className='main'>
      <div className='container' >
        <div className="main__content">
          <div className='about-title-section'>
            <div className="back">
              <div className="back-background"></div>
            </div>
            <h1>О нас</h1>
          </div>
          {dataForAbout.map((item) => (
            <div className='about-info' key={item.id}>
              <div className="about-text-1">{item.text_1}</div>
              <div className='box-about-text-2'><div className="about-text-2">{item.text_2}</div></div>
              <div className="about-text-flex-section">
                <div className="about-text-3">{item.text_3}</div>
                <div className="about_img-cont">
                  <img src={item.img} alt="about-img" />
                </div>
              </div>
              <div className="about-text-bottom-section">
                <h2>Наши принципы и девизы в работе:</h2>
                {item.ul && (
                  <ul>
                    {Object.entries(item.ul).map(([keyLi, liText]) => (
                      <li key={keyLi}>
                        {liText}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="about-text-sub-bottom">
                {item.text_4}
              </div>
            </div>

          ))}

          <SectionForm />
        </div>
      </div>
    </div>
  )
}
