let n = parseInt(prompt('Enter a positive integer: '));

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(n));