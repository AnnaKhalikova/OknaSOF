import styles from "./Consult.module.scss";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import image from "../../assets/images/consult.svg";
import { FormService } from "../../core/services/form.service";
import { Button } from "../ui/Button/Button";

export const Consult = () => {
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
    <section className={styles.consult}>
      <h2 className={styles.title}>СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ</h2>
      <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
          <p className={styles.subtitle}>
            Окно под ключ с замером, доставкой и установкой со скидкой{" "}
            <span className={styles.green}>3%</span> + гарантия{" "}
            <span className={styles.green}>3</span> года!
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
            <Button
              isLoading={isLoading}
              type={"submit"}
              btnText={"Принять участие в акции"}
            />
          </form>
        </div>
        <img className={styles.img} src={image} alt="#" />
      </div>
      <Toast ref={toast} />
    </section>
  );
};
