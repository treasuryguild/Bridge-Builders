//Helper function to get value by id
function getValue(name){
    return document.getElementById(name).value
  }
  
  function validateSubmission(){
    //save all the input values
    const name = getValue('name')
    const budgetB = getValue('budgetB')
    const ada = getValue('ada')
    const txid = getValue('txid')
    const description = getValue('description')
    const pool = getValue('pool')
    
    //generate a filename
    const filename = new Date().getTime().toString() + '-' + name.replace(/\s/g, '-') + ".json"
    
    function ideascaleLink(pool) {
      var iLink = "";
      switch(pool) {
        case 'Bridge Builders Mentorship Program':
          iLink = "https://cardano.ideascale.com/c/idea/380973";
          break;
        case 'Bridge Builders Governance Events':
          iLink = "https://cardano.ideascale.com/c/idea/382705";
          break;
        case 'Catalyst Leadership Academy':
          iLink = "https://cardano.ideascale.com/c/idea/384140";
          break;
        case 'SPOs Supporting Community Projects':
          iLink = "https://cardano.ideascale.com/c/idea/384782";
          break;
        default:
          iLink = "";
          break;
      }
      return iLink;
    }    
    
    //Generate a string mimicing the file structure
    //Indentation is important here
    let fileText = `{
  "id" : ${new Date().getTime().toString()},
  "date": "${new Date().toUTCString()}",
  "project": "Bridge Builders",
  "pool": "${pool}",
  "Ideascale": "${ideascaleLink(pool)}",
  "budget": "${budgetB}",
  "ada": ${ada},
  "name": "${name}",
  "wallet": "${txid}",
  "transaction id": "",
  "description": "${description}"
}
`
    
    //Encode string to URI format
    const encodedFileText = encodeURIComponent(fileText)
  
    //Generate a github link with query parameter
    
    function githubQueryLink(pool) {
      var answer = "";
      switch(pool) {
        case 'Bridge Builders Mentorship Program':
          answer = "Fund7/Bridge-Builders-Mentorship-Program/";
          break;
        case 'Bridge Builders Governance Events':
          answer = "Fund7/Bridge-Builders-Governance-Events/";
          break;
        case 'Catalyst Leadership Academy':
          answer = "Fund7/Catalyst-Leadership-Academy/";
          break;
        case 'SPOs Supporting Community Projects':
          answer = "Fund7/SPOs-Supporting-Community-Projects/";
          break;              
        default:
          answer = "";
          break;
      }
      return answer;
    }

    function githubQueryLink2(budgetB) {
      var answer = "";
      switch(budgetB) {
        case 'Incoming IOG':
          answer = "Incoming-IOG/";
          break;
        case 'Mentorship Program Remuneration':
          answer = "Mentorship-Program-Remuneration/";
          break;
        case 'Gov Events Orginization':
          answer = "Gov-Events-Orginization/";
          break;
        case 'Gov Events Management and Coordination':
          answer = "Gov-Events-Management-and-Coordination/";
          break;
        case 'Gov Events Host rewards':
          answer = "Gov-Events-Host-rewards/";
          break;
        case 'Gov Events Post tasks':
          answer = "Gov-Events-Post-tasks/";
          break;
        case 'Leadership Academy Leadership School':
          answer = "Leadership-Academy-Leadership-School/";
          break;
        case 'Leadership Academy Strategic Planning':
          answer = "Leadership-Academy-Strategic-Planning/";
          break;    
        case 'Leadership Academy Classroom Hosts':
          answer = "Leadership-Academy-Classroom-Hosts/";
          break;
        case 'Leadership Academy Academy Management':
          answer = "Leadership-Academy-Academy-Management/";
          break;
        case 'Leadership Academy Documentation':
          answer = "Leadership-Academy-Documentation/";
          break;
        case 'SPOs Marketing Campaign':
          answer = "SPOs-Marketing-Campaign/";
          break;
        case 'SPOs Website':
          answer = "SPOs-Website/";
          break;
        case 'SPOs Community Management':
          answer = "SPOs-Community-Management/";
          break;
        case 'SPOs security review process':
          answer = "SPOs-security-review-process/";
          break;
        case 'SPOs Pool Network Coordination':
          answer = "SPOs-Pool-Network-Coordination/";
          break;
        case 'SPOs Communication Hub Management':
          answer = "SPOs-Communication-Hub-Management/";
          break;
        case 'SPOs Technology and infrastructure':
          answer = "SPOs-Technology-and-infrastructure/";
          break;              
        default:
          answer = "";
          break;
      }
      return answer;
    }
    //Open in a new tab
  window.open("https://github.com/treasuryguild/Bridge-Builders/new/main/Transactions/" + githubQueryLink(pool) + githubQueryLink2(budgetB) + "new?value=" + encodedFileText +"&filename=" + filename);
    
  }
