import styles from "./Final.module.scss";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { InputTextarea } from "primereact/inputtextarea";
import image from "../../assets/images/questions.svg";
import { FormService } from "../../core/services/form.service";
import { Button } from "../ui/Button/Button";

export const Final = ({ formRef }) => {
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
    text: "",
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
    } catch (error) {
      setTimeout(() => {
        showError();
      }, 1000);
      console.log(error);
    }
  };

  return (
    <section ref={formRef} className={styles.consult}>
      <h2 className={styles.title}>
        ОСТАЛИСЬ ВОПРОСЫ?
        <br />
        <span style={{ color: "var(--dark)" }}>МЫ ВАМ ПЕРЕЗВОНИМ</span>
      </h2>
      <div className={styles.wrapper}>
        <img className={styles.img} src={image} alt="#" />
        <div className={styles.formWrapper}>
          <p className={styles.subtitle}>
            ВВЕДИТЕ СВОЙ ТЕЛЕФОН И МЫ ВАМ ПЕРЕЗВОНИМ
          </p>
          <p className={styles.text}>
            Мы свяжемся с вами в течение 30 минут
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
            <Controller
              name="text"
              control={control}
              render={({ field, fieldState }) => (
                <div
                  style={{ marginBottom: "36px" }}
                  className={styles.formItem}
                >
                  <span className="p-float-label">
                    <InputTextarea
                      className={styles.input}
                      rows={4}
                      cols={20}
                      id={field.text}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <label
                      style={{ color: "var(--dark)" }}
                      htmlFor={field.text}
                    >
                      Кратко опишите суть вопроса
                    </label>
                  </span>
                </div>
              )}
            />
            <Button
              isLoading={isLoading}
              type={"submit"}
              btnText={"Получить ответ"}
            />
          </form>
        </div>
      </div>
      <Toast ref={toast} />
    </section>
  );
};
