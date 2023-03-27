import { Container } from '../../Container/Container';
import css from './PeriodPlan.module.css';

const PeriodPlanExecution = () => {
  return (
    <Container>
      <div className={css.boxForm}>
        <p className={css.text}>You will have an apartment in:</p>
        <form className={css.form}>
          <label className={css.LabelForm}>
            <span className={css.textLabebel}>Number of years</span>
            <input className={css.input} type="text" placeholder="0 years" />
          </label>
          <label className={css.LabelFormMonths}>
            <span className={css.textLabebel}>Number of months</span>
            <input className={css.input} type="text" placeholder="0 months" />
          </label>
          <button className={css.button} type="submit">
            Fits
          </button>
        </form>
      </div>
    </Container>
  );
};

export default PeriodPlanExecution;