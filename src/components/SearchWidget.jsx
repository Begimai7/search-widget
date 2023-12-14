import React, { useMemo, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { styled } from "styled-components";
import DataPicker from "./DataPicker";
import { Controller, useForm } from "react-hook-form";

const SearchWidget = () => {
  const {
    handleSubmit,
    control,
    clearErrors,
    formState: { errors },
  } = useForm();
  const [locationFrom, setLocationFrom] = useState(null);
  const [locationTo, setLocationTo] = useState(null);
  const [selectData, setSelectData] = useState(null);
  const options = useMemo(() => countryList().getData(), []);

  const changeHandlerFrom = (locationFrom) => {
    setLocationFrom(locationFrom);
  };

  const changeHandlerTo = (locationTo) => {
    setLocationTo(locationTo);
  };
  const changeHandlerData = (data) => {
    clearErrors("dataPicker");
    setSelectData(data);
  };

  const handleSubmitHandler = (data) => {};

  return (
    <Form onSubmit={handleSubmit(handleSubmitHandler)}>
      <div>
        <label htmlFor="location-from">Откуда</label>
        <Controller
          name="locationFrom"
          control={control}
          defaultValue={null}
          rules={{
            required: "Обязательно выберите",
            pattern: {
              value: /your-pattern-here/,
              message: "Обязательно выберите ",
            },
          }}
          render={({ field }) => (
            <>
              <SelectCountry
                {...field}
                id="location-from"
                options={options}
                value={locationFrom}
                onChange={(selectedOption) => {
                  changeHandlerFrom(selectedOption);
                  field.onChange(selectedOption);
                }}
                placeholder="Select a country"
              />
              {errors?.locationFrom && (
                <ErrorText>{errors?.locationFrom.message}</ErrorText>
              )}
            </>
          )}
        />
      </div>
      <div>
        <label htmlFor="location-to">Куда</label>
        <Controller
          name="locationTo"
          defaultValue={null}
          control={control}
          rules={{
            required: "Обязательно выберите",
            pattern: {
              value: /your-pattern-here/,
              message: "Обязательно выберите ",
            },
          }}
          render={({ field }) => (
            <>
              <SelectCountry
                {...field}
                id="location-to"
                options={options}
                value={locationTo}
                onChange={(selectedOption) => {
                  changeHandlerTo(selectedOption);
                  field.onChange(selectedOption);
                }}
                placeholder="Select a country"
              />
            </>
          )}
        />
        {errors?.locationTo && (
          <ErrorText>{errors?.locationTo.message}</ErrorText>
        )}
      </div>

      <div>
        <Controller
          name="dataPicker"
          control={control}
          rules={{
            required: "Обязательно выберите",
            pattern: {
              value: /your-pattern-here/,
              message: "Обязательно выберите ",
            },
          }}
          render={({ field }) => (
            <DataPicker
              {...field}
              value={selectData}
              onChange={(data) => {
                changeHandlerData(data);
                field.onChange(data);
              }}
            />
          )}
        />
        {errors.dataPicker && (
          <p style={{ color: "red" }}>{errors.dataPicker.message}</p>
        )}
      </div>

      <Button type="submit">Найти</Button>
    </Form>
  );
};

export default SearchWidget;

const Form = styled("form")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
  backgroundColor: "aliceblue",
  padding: "100px",
  borderRadius: "20px",
  width: "60%",
  height: "100%",
  margin: "auto",
}));

const SelectCountry = styled(Select)`
  width: 200px;
  outline: none;
  margin-top: 10px;

  .css-t3ipsp-control:hover {
    border-color: none;
  }
  .css-t3ipsp-control {
  }
`;

const ErrorText = styled("p")(() => ({
  color: "red",
  fontSize: "16px",
}));

const Button = styled("button")(() => ({
  padding: "8px 40px",
  outline: "none",
  background: "#333",
  borderRadius: "6px",
  color: "#fff",
}));
