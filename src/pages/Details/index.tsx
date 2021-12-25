import {BaseLayout} from "../../components/BaseLayout";
import styles from './index.module.sass';
import {Details} from "../../components/Details";

export const DetailsPage = () => {
    return (
        <BaseLayout pageName='details' title={''}>
            <div className={styles.details__wrapper}>
                <Details />
            </div>
        </BaseLayout>
    )
}