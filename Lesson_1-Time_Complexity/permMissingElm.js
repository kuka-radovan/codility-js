/*
Problem description

A zero-indexed array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
Your goal is to find that missing element.

Write a function:
	function solution(A);

that, given a zero-indexed array A, returns the value of the missing element.

For example, given array A such that:
	A[0] = 2
	A[1] = 3
	A[2] = 1
	A[3] = 5

the function should return 4, as it is the missing element.

Assume that:
	N is an integer within the range [0..100,000];
	the elements of A are all distinct;
	each element of array A is an integer within the range [1..(N + 1)].

Complexity:
	expected worst-case time complexity is O(N);
	expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).

Elements of input arrays can be modified.
*/

function solution(A) {
	var n = A.length + 1;

	// http://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF
	var expectedSum = (n * (n + 1)) / 2;

	var realSum = A.reduce(function(previousValue, currentValue){
		return previousValue + currentValue;
	}, 0);
	
	return expectedSum - realSum;
}


(function tests() {
	require("should");

	describe("PermMissingElm: ", function () {
		describe("small array", function () {
			it("should return 4", function () {
				solution([1, 3, 2, 5]).should.be.exactly(4).and.be.a.Number;
			});
		});

		describe("big array", function () {
			it("should return 18", function () {
				solution([1, 3, 16, 10, 7, 19, 11, 15, 2, 5, 20, 8, 17, 4, 13, 9, 6, 12, 14]).should.be.exactly(18).and.be.a.Number;
			});
		});

		describe("empty array", function () {
			it("should return 1", function () {
				solution([]).should.be.exactly(1).and.be.a.Number;
			});
		});

		describe("missing first item", function () {
			it("should return 1", function () {
				solution([5, 3, 6, 2, 4]).should.be.exactly(1).and.be.a.Number;
			});
		});

		describe("missing last item", function () {
			it("should return 6", function () {
				solution([5, 3, 1, 2, 4]).should.be.exactly(6).and.be.a.Number;
			});
		});
	});
})();