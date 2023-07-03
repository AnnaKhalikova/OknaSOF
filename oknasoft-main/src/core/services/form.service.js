import base from "./base.service";

const send = (data) => {
  return base.post("/feedback/send", data);
};

export const FormService = {
  send,
};
