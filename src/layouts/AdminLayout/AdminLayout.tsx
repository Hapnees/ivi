import HeadModif from '@/components/HeadModif/HeadModif';
import { IHead } from '@/types/head.interface';
import { FC, PropsWithChildren } from 'react';
import style from './PageLayout.module.scss';

const PageLayout: FC<PropsWithChildren<IHead>> = ({
    title,
    description,
    keywords,
    noIndex,
    children,
}) => {
    return (
        <>
            <HeadModif
                title={title}
                description={description}
                keywords={keywords}
                noIndex={noIndex}
            />
            <div className={style.wrapper}>
                <main className={style.container}>{children}</main>
            </div>
        </>
    );
};

export default PageLayout;
