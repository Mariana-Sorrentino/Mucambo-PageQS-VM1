import React, { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import API from "src/services/api";
import { ComponentPage } from "src/styles/PadaoPage";
import {
  ContainerForm,
  FormSector,
  SectorLeft,
  GroupTitle,
  Description,
  GroupForms,
  InpForm,
  InpFormMessage,
  GroupAccet,
  DescriptionAccet,
  BtaAccet,
  CheckBox,
  NavigationBtn,
  SectorRight,
  Paragraph,
  FormImg,
  ImgGroup,
} from "./styles";

import { useForm } from "react-hook-form";

export default function BlockForm({ page }) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [sending, setSending] = useState(false);

  useEffect(() => {
    register("page", { value: page.title });
  }, []);

  async function sendFormData(values) {
    try {
      setSending(true);
      const { data } = await API.post("contacts", values);
      toast.success("Mensagem enviada com sucesso");
    } catch (error) {
      console.error(error.response.data.error);
      toast.error("Não conseguimos encaminhar sua mensagem neste momento");
    } finally {
      setSending(false);
    }
  }

  return (
    <ContainerForm>
      <ComponentPage>
        <FormSector>
          {/* Formulario de E-mail que o man vai verificar no adm futuramente */}
          <SectorLeft>
            <GroupTitle>
              <Description>Fale conosco</Description>
              <Paragraph>Em breve entraremos em contato.</Paragraph>
            </GroupTitle>
            <GroupForms onSubmit={handleSubmit(sendFormData)}>
              <InpForm
                placeholder="Nome"
                {...register("name", {
                  required: "O Nome é obrigatório",
                  minLength: {
                    value: 10,
                    message: "Mínimo necessário 10 caractéres",
                  },
                })}
                disabled={sending}
              />
              {errors.name && <span>{errors.name.message}</span>}
              <InpForm
                placeholder="email"
                {...register("email", {
                  required: "O E-mail é obrigatório",
                })}
                disabled={sending}
              />
              {errors.email && <span>{errors.email.message}</span>}
              <InpFormMessage
                placeholder="Messagem"
                {...register("message", {
                  required: "A mensagem é obrigatória",
                  minLength: {
                    value: 10,
                    message: "Mínimo necessário 10 caractéres",
                  },
                })}
                disabled={sending}
              />
              {errors.message && <span>{errors.message.message}</span>}
              <GroupAccet>
                <CheckBox
                  type="checkbox"
                  // {...field}
                  {...register("accept", {
                    required: "Aceite os termos da política de privacidade",
                  })}
                  disabled={sending}
                />
                <DescriptionAccet>
                  Eu concordo em receber comunicações. Ao informar meus dados,
                  eu concordo com a Política de Privacidade.
                </DescriptionAccet>
                {errors.accept && <span>{errors.accept.message}</span>}
              </GroupAccet>
              <NavigationBtn>
                {sending === false ? (
                  <BtaAccet type="submit">Enviar</BtaAccet>
                ) : (
                  <BtaAccet disabled>Enviando...</BtaAccet>
                )}
              </NavigationBtn>
            </GroupForms>
          </SectorLeft>
          {/* imagen do formulario */}
          <SectorRight>
            <FormImg>
              <ImgGroup src="/image/Post/GroupForm.svg" />
            </FormImg>
          </SectorRight>
        </FormSector>
      </ComponentPage>
    </ContainerForm>
  );
}
