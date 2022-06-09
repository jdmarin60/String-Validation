function check(inputText) {
    console.log(inputText);
	let stack = [];

	for(let i = 0; i < inputText.length; i++)
	{
		let x = inputText[i];

		if (x == '(' || x == '[' || x == '{')
		{
			stack.push(x);
			continue;
		}

		if (stack.length == 0)
			return false;
			
		let check;
		switch (x){
		case ')':
			check = stack.pop();
			if (check == '{' || check == '[')
				return false;
			break;

		case '}':
			check = stack.pop();
			if (check == '(' || check == '[')
				return false;
			break;

		case ']':
			check = stack.pop();
			if (check == '(' || check == '{')
				return false;
			break;
		}
	}
	return (stack.length == 0);
}
 
exports.check = check;