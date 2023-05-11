import { topTenListData } from '@/data/topTenList.data';
import Image from 'next/image';
import React from 'react';
import CustomCarousel from '../CustomCarousel/CustomCarousel';
import TopTenListCard from '../TopTenListCard/TopTenListCard';
import style from './TopTenList.module.scss';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const TopTenList: React.FC = () => {
    const { t } = useTranslation('home');
    const { locale } = useRouter();

<<<<<<< HEAD
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.title}>
                    {locale === 'ru' ? (
                        <Image
                            src='https://solea-parent.dfs.ivi.ru/picture/bypass/top10.svg'
                            alt='top10'
                            width={116}
                            height={28}
                        />
                    ) : (
                        <span>{t('top-10')}</span>
                    )}
                    <span>{t('this-week')}</span>
                </div>
                <CustomCarousel
                    href='/'
                    elementsMove={4}
                    elementsView={5}
                    classNameWrapper={style.carousel_wrapper}
                    breakpoints={[1292, 850]}
                    padding={16}
                    width='fit'>
                    {topTenListData.map((element, index) => (
                        <TopTenListCard
                            key={element.id}
                            id={element.id}
                            img={element.img}
                            title={element.title}
                            index={index}
                        />
                    ))}
                </CustomCarousel>
            </div>
=======
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.title}>
          {locale === 'ru' ? (
            <Image
              src='https://solea-parent.dfs.ivi.ru/picture/bypass/top10.svg'
              alt='top10'
              width={116}
              height={28}
            />
          ) : (
            <p>{t('top-10')}</p>
          )}
          <p>{t('this-week')}</p>
>>>>>>> 2968c9a251e14f27af4b292c4b4993b67cbe3e6f
        </div>
    );
};
export default TopTenList;
