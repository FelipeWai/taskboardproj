export default function Validation(values) {
    const errors = {}

    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|com\.br)$/;
    const password_pattern = /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    if (values.email === "") {
        errors.email = "E-mail é obrigatório";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "E-mail inválido. Por favor, insira um endereço de email válido.";
    }

    if (values.password === "") {
        errors.password = "Senha é obrigatório";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Senha inválida. Deve conter no mínimo 8 caracteres, pelo menos uma letra maiúscula, um número e um símbolo ($*&@#).";
    }
    return errors;
}
