/******** Good For Membership Type Applications ********/

let selectWrapper = document.getElementById("membership-dropdown");
let button = document.getElementById("membership-button");
let form = document.getElementById("form");

function MemberFactory() {
  this.createMember = function (name, type) {
    let member;

    if (type === "simple") {
      member = new SimpleMembership(name);
    } else if (type === "standard") {
      member = new StandardMembership(name);
    } else if (type === "super") {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };

    return member;
  };
}

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = "$5";
};

const StandardMembership = function (name) {
  this.name = name;
  this.cost = "$15";
};

const SuperMembership = function (name) {
  this.name = name;
  this.cost = "$25";
};

const members = [];
const factory = new MemberFactory();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let selectedOption = selectWrapper.options[selectWrapper.selectedIndex].value;
  let yourName = document.getElementById("your-name").value;

  members.push(factory.createMember(yourName, selectedOption));

  members.forEach(function (member) {
    member.define();
  });
});
