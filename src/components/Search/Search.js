import React, {useEffect} from 'react'
import './Search.css'
import closeimg from '../../img/closefilters.svg'
import FilterImg from '../../img/FilterSvg.svg'
import ArrowImg from '../../img/Arrow.png'

const Search = () => {
  useEffect(() =>{
    document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
      const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
      const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
      const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
      const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
      const dropDownArrow = dropDownWrapper.querySelector('.dropdown__input-arrow');

      // Клик по кнопке. Открыть/Закрыть select
      dropDownBtn.addEventListener('click', function (e) {
        dropDownList.classList.toggle('dropdown__list--visible');
        dropDownArrow.classList.toggle('dropdown__input-arrow-rotate');
      });

      // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
      dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
          e.stopPropagation();
          dropDownBtn.innerText = this.innerText;
          dropDownBtn.focus();
          dropDownInput.value = this.dataset.value;
          dropDownList.classList.remove('dropdown__list--visible');
          dropDownArrow.classList.remove('dropdown__input-arrow-rotate');
        });
      });

      // Клик снаружи дропдауна. Закрыть дропдаун
      document.addEventListener('click', function (e) {
        if (e.target !== dropDownBtn) {
          dropDownBtn.classList.remove('dropdown__button--active');
          dropDownList.classList.remove('dropdown__list--visible');
          dropDownArrow.classList.remove('dropdown__input-arrow-rotate');
        }
      });

      // Нажатие на Tab или Escape. Закрыть дропдаун
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
          dropDownBtn.classList.remove('dropdown__button--active');
          dropDownList.classList.remove('dropdown__list--visible');
          dropDownArrow.classList.remove('dropdown__input-arrow-rotate');
        }
      });
    });
  }, [])
  const openPopup = () => {
    const body = document.querySelector('body')
    const popup = document.querySelector('.popup')
    body.style.overflowY = 'hidden';
    popup.classList.add('popup--active');
    document.addEventListener('keydown', (e) => {
      if (e.key === "Escape"){
        closePopup();
      }
    })
  }
  
  const closePopup = () => {
    const body = document.querySelector('body');
    const popup = document.querySelector('.popup');
    popup.classList.remove('popup--active');
    body.removeAttribute('style');
  }

  return(
    <div>
      <div className="ButtonFiltersBlock">
        <img src={FilterImg} alt="" />
        <button className="ButtonFilters" onClick={openPopup}>
          Фильтры
        </button>
      </div>
      <section className="popup">
        <div className="popup__inner">
          <div className="popup__header">
            <h1 className="popup__text popup__text--title">Фильтры</h1>
            <img onClick={closePopup} className='closeimg' src={closeimg} alt=""/>
          </div>
            <div className="Columns">
              <div className="LeftColumn">
                <div className="dropdown">
                  <button className="dropdown__button">Выберите специализацию</button>
                  <ul className="dropdown__list">
                    <li className="dropdown__list-item" data-value="All Specialization">Любая специализация</li>
                    <li className="dropdown__list-item" data-value="front-end">front-end</li>
                    <li className="dropdown__list-item" data-value="back-end">back-end</li>
                  </ul>
                  <img src={ArrowImg} alt="" className='dropdown__input-arrow'/>
                  <input type="text" name="select-job" value="" className="dropdown__input-hidden"/>
                </div>
                <div className="dropdown">
                  <button className="dropdown__button">Выберите опыт работы</button>
                  <ul className="dropdown__list">
                    <li className="dropdown__list-item" data-value="No Exp">Нет опыта работы</li>
                    <li className="dropdown__list-item" data-value="1 Year">1 год</li>
                  </ul>
                  <img src={ArrowImg} alt="" className='dropdown__input-arrow' />
                  <input type="text" name="select-expirience" value="" className="dropdown__input-hidden" />
                </div>
                <div className="dropdown">
                  <button className="dropdown__button">Выберите отрасль компании</button>
                  <ul className="dropdown__list">
                    <li className="dropdown__list-item" data-value="All CompanySpec">Любая</li>
                    <li className="dropdown__list-item" data-value="TI">IT</li>
                  </ul>
                  <img src={ArrowImg} alt="" className='dropdown__input-arrow' />
                  <input type="text" name="select-company" value="" className="dropdown__input-hidden" />
                </div>
                <div className="checkbox-blockInv">
                  <input type="checkbox" className="custom-checkbox" id="Inv" />
                  <label htmlFor="Inv">Для людей с инвалидностью</label>
                </div>
                <div className="checkbox-blockDep">
                  <input type="checkbox" className="custom-checkbox" id="Dep" />
                  <label htmlFor="Dep">Без переезда</label>
                </div>
                <button className='ButtonSeeResult'>Смотреть вакансии</button>
              </div>
              <div className="RightColumn">
                <input placeholder='Зарплата от, руб' className='Money' type="text" />
                <div className="dropdown">
                  <button className="dropdown__button">Выберите график работы</button>
                  <ul className="dropdown__list">
                    <li className="dropdown__list-item" data-value="All Schedule">Любой</li>
                    <li className="dropdown__list-item" data-value="6 day in week">6 дней в неделю</li>
                    <li className="dropdown__list-item" data-value="5 day in week">5 дней в неделю</li>
                  </ul>
                  <img src={ArrowImg} alt="" className='dropdown__input-arrow' />
                  <input type="text" name="select-schedule" value="" className="dropdown__input-hidden" />
                </div>
                <input placeholder='Слова для исключения' type="text" className="Words" />
                <div className="checkbox-blockTel">
                  <input type="checkbox" className="custom-checkbox" id="Tel" />
                  <label htmlFor="Tel">С телефоном</label>
                </div>
                <div className="checkbox-blockHideVac">
                  <input type="checkbox" className="custom-checkbox" id="HideVac" />
                  <label htmlFor="HideVac">Скрыть вакансии от агенств</label>
                </div>
                <button className='ButtonCancel'>Отменить фильтры</button>
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Search