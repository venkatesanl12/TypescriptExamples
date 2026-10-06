
interface WHO {
    covidVaccination(): void;
}

//100% abstraction
interface USMedical extends WHO {
    minFee: number;
    physio(): void;
    cardio(): void;
    emergency(): void;
}

interface UKMedical extends WHO {
    eNT(): void;
    oncology(): void;
    emergency(): void;
}

interface IndianMedical extends WHO {
    pedia(): void;
    dental(): void;
    gastro(): void;
    emergency(): void;
}

class FortisHospital implements USMedical, UKMedical, IndianMedical {

    minFee: number = 10;

    //WHO
    covidVaccination(): void {
        console.log('FH -- covidVaccination');
    }
    //common:
    emergency(): void {
        console.log('FH -- emergency');
    }

    physio(): void {
        console.log('FH -- physio');
    }
    cardio(): void {
        console.log('FH -- cardio');
    }
    eNT(): void {
        console.log('FH -- eNT');
    }
    oncology(): void {
        console.log('FH -- oncology');
    }
    pedia(): void {
        console.log('FH -- pedia');
    }
    dental(): void {
        console.log('FH -- dental');
    }
    gastro(): void {
        console.log('FH -- gastro');
    }

    //individual methods:
    medicalTest(): void {
        console.log('FH -- medical testing');
    }

}


let fh: FortisHospital = new FortisHospital();
fh.cardio();
fh.physio();
fh.eNT();
fh.gastro();
fh.oncology();
fh.emergency();
fh.medicalTest();
fh.covidVaccination();

//top casting: child class object can be referred by parent interface ref variable:
let us: USMedical = new FortisHospital();
us.cardio();
us.physio();
us.emergency();

console.log ("=================UK MEDICAL=======");
let uk: UKMedical = new FortisHospital();
uk.covidVaccination();
uk.eNT();
uk.emergency();
uk.oncology();