import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

const BookingModal = () => {
  const schema = z.object({
    name: z.string().min(1, { message: "Must be at least 1 character" }).max(30, { message: "Must be at most 30 characters" }),
    phone: z.string().min(10, { message: "Must be at least 10 digits" }),
    peopleCount: z.coerce.number().lte(10, { message: "Must be at most 10 digits"}).gte(5, { message: "Must be at least 1 digit"})
  }).required();
  const { register, handleSubmit, formState: { errors }, } = useForm({resolver: zodResolver(schema)});
  const navigate = useNavigate();
  const mutation = useMutation((order) => sendOrder(order));
  return (
  <S.BlockLayer>
    <S.Modal>
      <S.ModalCloseBtn>
        <IconClose width="16" height="16" />
        <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
      </S.ModalCloseBtn>
      <S.ModalTitle>Оставить заявку</S.ModalTitle>
      <S.BookingForm onSubmit={handleSubmit((data) => {
        mutation.mutate(data);
        navigate("/")})}
      id="booking-form"
      >
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
          <S.BookingInput {...register("name")}
            type="text"
            id="booking-name"
            placeholder="Имя"
            required
          />
            {errors.name?.message && <p style = {{color:"red"}}>{errors.name?.message}</p>}
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-phone">
            Контактный телефон
          </S.BookingLabel>
          <S.BookingInput {...register("phone")}
            type="tel"
            id="booking-phone"
            placeholder="Телефон"
            required
          />
          {errors.phone?.message && <p style = {{color:"red"}}>{errors.phone?.message}</p>}
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-people">
            Количество участников
          </S.BookingLabel>
          <S.BookingInput {...register("peopleCount")}
            type="number"
            id="booking-people"
            placeholder="Количество участников"
            required
          />
          {errors.peopleCount?.message && <p style = {{color:"red"}}>{errors.peopleCount?.message}</p>}
        </S.BookingField>
        <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingCheckboxInput {...register("isLegal")}
            type="checkbox"
            id="booking-legal"
            required
          />
          <S.BookingCheckboxLabel
            className="checkbox-label"
            htmlFor="booking-legal"
          >
            <S.BookingCheckboxText>
              Я согласен с{' '}
              <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
              </S.BookingLegalLink>
            </S.BookingCheckboxText>
          </S.BookingCheckboxLabel>
        </S.BookingCheckboxWrapper>
      </S.BookingForm>
    </S.Modal>
  </S.BlockLayer>
)
async function sendOrder(data) {
  console.log('ORDER after', data);
    const response = await fetch('http://localhost:3001/orders', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    console.log(result);
}

};
export default BookingModal;
