import React, { useEffect, useState } from "react";
import { ComponentPage } from "src/styles/PadaoPage";
import {
  TestsSectorRevenda,
  CardTxt,
  SectorsTexts,
  DroSeletsF,
  DivSeahchimSelected,
  CustonSelects,
  SelectsOptions,
  SectorSwitch,
  RepresentContainer,
  Representas,
  StadoTitle,
  TitleStates,
  RepresentData,
  DataFormName,
  DataFormEmail,
  DataForm,
  RepresentaTitle,
  RepresentaEstado,
  SectorMap,
  Mapas,
} from "./styles";

export default function BlockRevenda({ agentsData }) {
  const [switchType, setSwitchType] = useState(false);
  const [sellers, setSellers] = useState(agentsData.seller);
  const [resellers, setResellers] = useState(agentsData.reseller);

  const [selectedRegion, setSelectedRegion] = useState(null);
  const [contacts, setContacts] = useState(null);
  const [regionName, setRegionName] = useState("");

  useEffect(() => {
    if (selectedRegion !== null) {
      if (switchType === true) {
        if (sellers[selectedRegion].contacts.length !== 0) {
          setRegionName(sellers[selectedRegion].name);
          setContacts(sellers[selectedRegion].contacts);
        } else {
          setRegionName("");
          setContacts(null);
        }
      } else {
        if (resellers[selectedRegion].contacts.length !== 0) {
          setRegionName(resellers[selectedRegion].name);
          setContacts(resellers[selectedRegion].contacts);
        } else {
          setRegionName("");
          setContacts(null);
        }
      }
    }
  }, [selectedRegion]);

  const AgentCard = ({ agent }) => {
    return (
      <Representas id="boxRepresentante">
        <StadoTitle>
          <TitleStates>{regionName}</TitleStates>
        </StadoTitle>

        <RepresentData>
          <DataFormName>
            <RepresentaTitle>{contacts[agent].name} </RepresentaTitle>
            <RepresentaEstado>{contacts[agent].office} </RepresentaEstado>
          </DataFormName>
          <DataFormEmail>
            <RepresentaTitle>
              <span id="Nufe">{`(${contacts[agent].phone_ddd}) `}</span>
              <strong> {contacts[agent].phone_number}</strong>
            </RepresentaTitle>
            <RepresentaEstado>
              <strong> {contacts[agent].email}</strong>
            </RepresentaEstado>
          </DataFormEmail>
          <DataForm>
            <RepresentaTitle> Estado:</RepresentaTitle>
            <RepresentaEstado>
              {contacts[agent].states.map(function (obj, index) {
                let final =
                  index === contacts[agent].states.length - 1 ? true : false;
                return (
                  <span key={`state-${obj.id}`}>
                    {obj.name} {final === false && "|"}{" "}
                  </span>
                );
              })}
            </RepresentaEstado>
          </DataForm>
        </RepresentData>
        <SectorMap>
          <Mapas>
            <iframe
              id="LocalizaMap"
              src={contacts[agent].map_url}
              // width={"100%"}
              // height={220}
              // style={{ border: 0 }}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Mapas>
        </SectorMap>
      </Representas>
    );
  };

  return (
    <React.Fragment>
      <TestsSectorRevenda>
        <ComponentPage>
          <CardTxt>
            <SectorsTexts>Encontre um Vendedor ou Representante</SectorsTexts>
          </CardTxt>
          <SectorSwitch>
            <span class="switch">
              <input
                type="checkbox"
                id="switcher"
                checked={switchType}
                onClick={() => {
                  setSwitchType(!switchType);
                  setSelectedRegion(null);
                  setContacts(null);
                }}
              />
              <label for="switcher"></label>
            </span>
          </SectorSwitch>

          <DivSeahchimSelected>
            <CustonSelects htmlFor="styledSelect2">
              <DroSeletsF
                name="options2"
                id="styledSelect2"
                onChange={(e) => {
                  setSelectedRegion(e.target.value);
                }}
              >
                <SelectsOptions value={null} desable>
                  Escolha uma região
                </SelectsOptions>

                {switchType === true
                  ? sellers.map((region, index) => {
                      return (
                        <SelectsOptions
                          key={`sellerOption-${region.id}`}
                          value={index}
                        >
                          {region.name}
                        </SelectsOptions>
                      );
                    })
                  : resellers.map((region, index) => {
                      return (
                        <SelectsOptions
                          key={`resellerOption-${region.id}`}
                          value={index}
                        >
                          {region.name}
                        </SelectsOptions>
                      );
                    })}
              </DroSeletsF>
            </CustonSelects>
          </DivSeahchimSelected>
          <RepresentContainer>
            {contacts !== null ? (
              contacts.map((contact, index) => {
                return (
                  <AgentCard key={`contact-${contact.id}`} agent={index} />
                );
              })
            ) : (
              <Representas>
                <CardTxt>
                  <SectorsTexts>
                    Encontre um vendendor ou representante!
                  </SectorsTexts>
                </CardTxt>
              </Representas>
            )}
          </RepresentContainer>
        </ComponentPage>
      </TestsSectorRevenda>
    </React.Fragment>
  );
}
