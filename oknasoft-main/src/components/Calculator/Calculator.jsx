import styles from "./Calculator.module.scss";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { InputNumber } from "primereact/inputnumber";
import { SelectButton } from "primereact/selectbutton";
import image from "../../assets/images/calculator.svg";
import { FormService } from "../../core/services/form.service";
import { Button } from "../ui/Button/Button";

import { InputSwitch } from "primereact/inputswitch";

export const Calculator = ({ calcRef }) => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useRef(null);

  const load = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Заявка успешно отправлена",
      detail: `Дорогой заказчик ${getValues(
        "name"
      )}, наш специалист свяжется с вами в ближайшее время`,
    });
  };

  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Ошибка",
      detail:
        "Пожалуйста, повторите попытку позже или свяжитесь с нами любым удобным для вас способом",
    });
  };

  const defaultValues = {
    name: "",
    phone: "",
    square: "",
    length: "",
    instalacja: false,
    zamek: false,
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm({ defaultValues });

  const getFormErrorMessage = (error) => {
    return errors[error] ? (
      <small className="p-error">{errors[error].message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  const onSubmit = async (data) => {
    load();
    console.log(data);
    try {
      await FormService.send(data);
      setTimeout(() => {
        showSuccess();
        reset();
      }, 1000);
      console.log(data);
    } catch (error) {
      setTimeout(() => {
        showError();
      }, 1000);
      console.log(error);
    }
  };

  return (
    <section ref={calcRef} className={styles.consult}>
      <h2 className={styles.title}>
          РАСЧЕТ СТОИМОСТИ
        <br />
        <span style={{ color: "var(--dark)" }}>ПРИМЕРНАЯ СТОИМОСТЬ СЕЙЧАС</span>
      </h2>
      <div className={styles.wrapper}>
        <img className={styles.img} src={image} alt="#" />
        <div className={styles.formWrapper}>
          <p className={styles.subtitle}>
              Вы можете сделать это самостоятельно с помощью калькулятора
              приблизительный расчет вашего заказа.
          </p>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.flex}>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Введите ваше имя" }}
                render={({ field, fieldState }) => (
                  <div className={styles.formItem}>
                    <label
                      htmlFor={field.name}
                      className={classNames({ "p-error": errors.value })}
                    ></label>
                    <span className="p-float-label">
                      <InputText
                        id={field.name}
                        value={field.value}
                        className={classNames(
                          { "p-invalid": fieldState.error },
                          styles.input
                        )}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <label
                        style={{ color: "var(--dark)" }}
                        htmlFor={field.name}
                      >
                        Имя
                      </label>
                    </span>
                    {getFormErrorMessage(field.name)}
                  </div>
                )}
              />
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Введите свой номер телефона" }}
                render={({ field, fieldState }) => (
                  <div className={styles.formItem}>
                    <label
                      htmlFor={field.phone}
                      className={classNames({ "p-error": errors.value })}
                    ></label>
                    <span className="p-float-label">
                      <InputMask
                        className={classNames(
                          { "p-invalid": fieldState.error },
                          styles.input
                        )}
                        onChange={(e) => field.onChange(e.target.value)}
                        id={field.phone}
                        value={field.value}
                        mask="+375 (99) 999-99-99"
                      />
                      <label
                        style={{ color: "var(--dark)" }}
                        htmlFor={field.phone}
                      >
                        Телефон
                      </label>
                    </span>
                    {getFormErrorMessage(field.name)}
                  </div>
                )}
              />
            </div>
            <div className={styles.flex}>
              <Controller
                name="square"
                control={control}
                render={({ field, fieldState }) => (
                  <div className={styles.formItem}>
                    <label className={styles.label} htmlFor={field.square}>
                        Введите приблизительную длину окна в см
                    </label>
                    <InputNumber
                      className={classNames(styles.input, styles.inputNum)}
                      onValueChange={(e) => field.onChange(e.target.value)}
                      id={field.square}
                      value={field.value}
                    />
                  </div>
                )}
              />
              <Controller
                name="length"
                control={control}
                render={({ field, fieldState }) => (
                  <div className={styles.formItem}>
                    <label className={styles.label} htmlFor={field.length}>
                        Введите высоту окна в см
                    </label>
                    <InputNumber
                      className={classNames(styles.input, styles.inputNum)}
                      onValueChange={(e) => field.onChange(e.target.value)}
                      id={field.length}
                      value={field.value}
                    />
                  </div>
                )}
              />
            </div>

            <div className={styles.flexRow}>
              <Controller
                name="instalacja"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <label htmlFor={field.instalacja}>Установка</label>
                    <InputSwitch
                      inputId={field.instalacja}
                      checked={field.value}
                      inputRef={field.ref}
                      onChange={(e) => field.onChange(e.value)}
                    />
                  </>
                )}
              />

              <Controller
                name="zamek"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <label htmlFor={field.zamek}>Замер</label>
                    <InputSwitch
                      inputId={field.zamek}
                      checked={field.value}
                      inputRef={field.ref}
                      onChange={(e) => field.onChange(e.value)}
                    />
                  </>
                )}
              />
            </div>

            <Button
              isLoading={isLoading}
              type={"submit"}
              btnText={"Рассчитать стоимость"}
            />
          </form>
        </div>
      </div>
      <Toast ref={toast} />
    </section>
  );
};
