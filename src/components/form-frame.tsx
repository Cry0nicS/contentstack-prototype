const FormFrame = ({id}: {id: number}): JSX.Element => (
    <iframe
        id="xm-form"
        src={`https://bkk-vbu.form.cloud/formcycle/form/provide/${id}`}
        frameBorder={0}
        style={{
            width: "100%",
            height: 1000,
            display: "block",
            margin: "auto",
            maxWidth: "100%"
        }}
    />
);

export {FormFrame};
