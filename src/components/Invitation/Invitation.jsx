import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import branchIcon from 'images/branch-icon.svg';
import sprite from 'images/symbol-defs.svg';

import css from './Invitation.module.css';

const Invitation = ({ guestsNames }) => {
  return (
    <>
      <Section>
        <Container>
          <img
            src={branchIcon}
            alt="Branch"
            width="60"
            className={css.branchIcon}
          />
          <p className={css.invitationText}>Дорогі,</p>

          <p className={css.invitationName}>{guestsNames.join(', ')}</p>

          <p className={css.invitationText}>
            З радістю запрошуємо вас на наше весілля, яке відбудеться:
          </p>

          <table className={css.calendar}>
            <caption className={`${css.invitationText} ${css.calendarCaption}`}>
              Серпень 2023
            </caption>
            <thead>
              <tr>
                <th>Пн</th>
                <th>Вт</th>
                <th>Ср</th>
                <th>Чт</th>
                <th>Пт</th>
                <th>Сб</th>
                <th>Вс</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
              </tr>
              <tr>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
              </tr>
              <tr>
                <td>14</td>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>
                  18
                  <svg className={css.iconHeart} width="60">
                    <use href={`${sprite}#icon-heart-o`}></use>
                  </svg>
                </td>

                <td>19</td>
                <td>20</td>
              </tr>
              <tr>
                <td>21</td>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
              </tr>
              <tr>
                <td>28</td>
                <td>29</td>
                <td>30</td>
                <td>31</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p className={css.invitationText}>
            І ми не уявляємо цей радісний день без вас - близьких і дорогих нам
            людей!
          </p>
        </Container>
      </Section>
      ;
    </>
  );
};

export default Invitation;
