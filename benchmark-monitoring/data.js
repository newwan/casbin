window.BENCHMARK_DATA = {
  "lastUpdate": 1698273971204,
  "repoUrl": "https://github.com/newwan/casbin",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "46661603+PokIsemaine@users.noreply.github.com",
            "name": "鱼竿钓鱼干",
            "username": "PokIsemaine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9dd1ab08d9600d01779b76528d731a57b41d67b3",
          "message": "feat: benchmark monitoring action (#1263)\n\n* feat: benchmark monitoring\r\n\r\n* fix: action gh-pages-branch\r\n\r\n* fix: change gh-pages-branch",
          "timestamp": "2023-06-15T21:34:23+08:00",
          "tree_id": "ccd939904f3ddedfe83574582cb14277d9a3e712",
          "url": "https://github.com/newwan/casbin/commit/9dd1ab08d9600d01779b76528d731a57b41d67b3"
        },
        "date": 1686882155969,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 20.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57548438 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 229,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5182308 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 232.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5314672 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 230.7,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5160714 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 239,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4887370 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 237.1,
            "unit": "ns/op\t      97 B/op\t       3 allocs/op",
            "extra": "4546052 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 230.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5186007 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 256.5,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "4939869 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 3669,
            "unit": "ns/op\t    1520 B/op\t      18 allocs/op",
            "extra": "312534 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 256.1,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "4693676 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 232.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5192661 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 231,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5210840 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 227.9,
            "unit": "ns/op\t     105 B/op\t       4 allocs/op",
            "extra": "5292423 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 687.6,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "1754532 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 716.3,
            "unit": "ns/op\t     157 B/op\t       6 allocs/op",
            "extra": "1605655 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 786.2,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "1554258 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 712.5,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "1686340 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 982.2,
            "unit": "ns/op\t     181 B/op\t       7 allocs/op",
            "extra": "1216479 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 1719,
            "unit": "ns/op\t     460 B/op\t       9 allocs/op",
            "extra": "941439 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 708.4,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "1656276 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 814.6,
            "unit": "ns/op\t     178 B/op\t       7 allocs/op",
            "extra": "1378861 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 1797,
            "unit": "ns/op\t     297 B/op\t      13 allocs/op",
            "extra": "668516 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 20.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58137556 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 4631,
            "unit": "ns/op\t    1489 B/op\t      17 allocs/op",
            "extra": "250729 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 7108,
            "unit": "ns/op\t    2034 B/op\t      35 allocs/op",
            "extra": "166578 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 63847,
            "unit": "ns/op\t   19972 B/op\t     480 allocs/op",
            "extra": "18982 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 688430,
            "unit": "ns/op\t  191331 B/op\t    4828 allocs/op",
            "extra": "1725 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 9039749,
            "unit": "ns/op\t 1895795 B/op\t   48078 allocs/op",
            "extra": "134 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 76563,
            "unit": "ns/op\t   20024 B/op\t     615 allocs/op",
            "extra": "15349 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 751682,
            "unit": "ns/op\t  194205 B/op\t    6023 allocs/op",
            "extra": "1408 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 8881580,
            "unit": "ns/op\t 1945041 B/op\t   60814 allocs/op",
            "extra": "138 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 5872,
            "unit": "ns/op\t    1821 B/op\t      27 allocs/op",
            "extra": "188696 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 6623,
            "unit": "ns/op\t    1804 B/op\t      25 allocs/op",
            "extra": "179095 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 3603,
            "unit": "ns/op\t    1513 B/op\t      17 allocs/op",
            "extra": "326101 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 4864963,
            "unit": "ns/op\t 1302938 B/op\t   40088 allocs/op",
            "extra": "246 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 7712,
            "unit": "ns/op\t    3021 B/op\t      37 allocs/op",
            "extra": "156669 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 9029,
            "unit": "ns/op\t    2440 B/op\t      49 allocs/op",
            "extra": "130886 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 5397,
            "unit": "ns/op\t    1740 B/op\t      22 allocs/op",
            "extra": "218359 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 29240,
            "unit": "ns/op\t   16600 B/op\t     164 allocs/op",
            "extra": "41379 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 102837,
            "unit": "ns/op\t   11953 B/op\t     797 allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 1099098,
            "unit": "ns/op\t  125909 B/op\t    8741 allocs/op",
            "extra": "1041 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 12916675,
            "unit": "ns/op\t 1349923 B/op\t   89741 allocs/op",
            "extra": "93 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 7602648762,
            "unit": "ns/op\t5285354304 B/op\t60930559 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 209910147,
            "unit": "ns/op\t139507841 B/op\t 1670229 allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 7811459703,
            "unit": "ns/op\t5422354216 B/op\t62540989 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 13546,
            "unit": "ns/op\t    7538 B/op\t     111 allocs/op",
            "extra": "90582 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 726.9,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1672060 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 13064,
            "unit": "ns/op\t    7551 B/op\t     111 allocs/op",
            "extra": "90709 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46661603+PokIsemaine@users.noreply.github.com",
            "name": "鱼竿钓鱼干",
            "username": "PokIsemaine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f18f44a619c1045258d3d980348027e3107082d",
          "message": "ci: change CI benchmark alert threshold (#1266)",
          "timestamp": "2023-06-17T00:18:17+08:00",
          "tree_id": "2c8a631c329bf5edbfb83b9e2cb12f1b4352b5e7",
          "url": "https://github.com/newwan/casbin/commit/4f18f44a619c1045258d3d980348027e3107082d"
        },
        "date": 1686997921651,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 20.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53738810 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 211,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5697559 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 210.3,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5658321 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 229.6,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4923253 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 251.1,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4765820 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 204.6,
            "unit": "ns/op\t      96 B/op\t       3 allocs/op",
            "extra": "4906623 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 213,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5572448 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 229.3,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "5223246 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 3773,
            "unit": "ns/op\t    1522 B/op\t      18 allocs/op",
            "extra": "302592 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 233.4,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "5142681 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 207.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5801479 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 211.4,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5721177 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 212,
            "unit": "ns/op\t     105 B/op\t       4 allocs/op",
            "extra": "6082964 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 656.2,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "1865344 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 704.5,
            "unit": "ns/op\t     157 B/op\t       6 allocs/op",
            "extra": "1718740 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 726.8,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "1661190 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 679.3,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "1822521 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 886.9,
            "unit": "ns/op\t     179 B/op\t       7 allocs/op",
            "extra": "1328490 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 1552,
            "unit": "ns/op\t     456 B/op\t       9 allocs/op",
            "extra": "957670 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 675.8,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "1730733 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 769.7,
            "unit": "ns/op\t     178 B/op\t       7 allocs/op",
            "extra": "1428218 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 1584,
            "unit": "ns/op\t     290 B/op\t      13 allocs/op",
            "extra": "633499 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 20.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57357567 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 4736,
            "unit": "ns/op\t    1489 B/op\t      17 allocs/op",
            "extra": "248330 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 7139,
            "unit": "ns/op\t    2036 B/op\t      35 allocs/op",
            "extra": "165366 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 63464,
            "unit": "ns/op\t   19959 B/op\t     480 allocs/op",
            "extra": "18736 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 655478,
            "unit": "ns/op\t  191227 B/op\t    4828 allocs/op",
            "extra": "1813 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 7849324,
            "unit": "ns/op\t 1896702 B/op\t   48097 allocs/op",
            "extra": "152 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 77170,
            "unit": "ns/op\t   20074 B/op\t     615 allocs/op",
            "extra": "15841 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 743238,
            "unit": "ns/op\t  194161 B/op\t    6022 allocs/op",
            "extra": "1550 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 8561395,
            "unit": "ns/op\t 1946241 B/op\t   60851 allocs/op",
            "extra": "132 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 5928,
            "unit": "ns/op\t    1821 B/op\t      27 allocs/op",
            "extra": "183924 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 6625,
            "unit": "ns/op\t    1804 B/op\t      25 allocs/op",
            "extra": "175744 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 3706,
            "unit": "ns/op\t    1511 B/op\t      17 allocs/op",
            "extra": "317179 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 5253613,
            "unit": "ns/op\t 1303853 B/op\t   40088 allocs/op",
            "extra": "228 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 7849,
            "unit": "ns/op\t    3019 B/op\t      37 allocs/op",
            "extra": "151328 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 9194,
            "unit": "ns/op\t    2443 B/op\t      49 allocs/op",
            "extra": "129265 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 5479,
            "unit": "ns/op\t    1738 B/op\t      22 allocs/op",
            "extra": "214936 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 29061,
            "unit": "ns/op\t   16604 B/op\t     164 allocs/op",
            "extra": "40333 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 102669,
            "unit": "ns/op\t   11952 B/op\t     797 allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 1073240,
            "unit": "ns/op\t  125908 B/op\t    8741 allocs/op",
            "extra": "1080 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 14450297,
            "unit": "ns/op\t 1349918 B/op\t   89741 allocs/op",
            "extra": "80 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 7638907354,
            "unit": "ns/op\t5284843536 B/op\t60929998 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 207220446,
            "unit": "ns/op\t139501212 B/op\t 1670227 allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 7989735755,
            "unit": "ns/op\t5422691352 B/op\t62540527 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 13397,
            "unit": "ns/op\t    7548 B/op\t     111 allocs/op",
            "extra": "88528 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 705.8,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1714824 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 13513,
            "unit": "ns/op\t    7549 B/op\t     111 allocs/op",
            "extra": "87730 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peymanmortazavi@users.noreply.github.com",
            "name": "Peyman Mortazavi",
            "username": "peymanmortazavi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8353eda2716fb0038c5324f3cb7a41e51f36ee0c",
          "message": "fix: add EnforceContext' GetCacheKey() (#1265)\n\n* allow enforce context to get cached\r\n\r\n* add tests\r\n\r\n* Update enforcer_cached.go\r\n\r\n---------\r\n\r\nCo-authored-by: hsluoyz <hsluoyz@qq.com>",
          "timestamp": "2023-06-17T22:31:53+08:00",
          "tree_id": "e865f6b93eafc3c706bd611174ae3ec2a9a16aeb",
          "url": "https://github.com/newwan/casbin/commit/8353eda2716fb0038c5324f3cb7a41e51f36ee0c"
        },
        "date": 1687063138580,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 20.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58283053 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 219,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5351320 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 220.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5466505 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 220,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5418549 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 226.6,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5136285 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 223.9,
            "unit": "ns/op\t      96 B/op\t       3 allocs/op",
            "extra": "5140296 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 218.9,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5422696 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 229.7,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "5172958 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 3540,
            "unit": "ns/op\t    1520 B/op\t      18 allocs/op",
            "extra": "331034 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 254.4,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "4932087 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 219.3,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5435812 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 222.4,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5360061 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext",
            "value": 404.3,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "2954552 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 223.3,
            "unit": "ns/op\t     105 B/op\t       4 allocs/op",
            "extra": "5300155 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 649,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "1817617 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 686.4,
            "unit": "ns/op\t     157 B/op\t       6 allocs/op",
            "extra": "1716282 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 748.6,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "1608572 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 666.2,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "1795075 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 943.1,
            "unit": "ns/op\t     180 B/op\t       7 allocs/op",
            "extra": "1254800 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 1559,
            "unit": "ns/op\t     413 B/op\t       9 allocs/op",
            "extra": "873908 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 672.4,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "1798604 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 761,
            "unit": "ns/op\t     178 B/op\t       7 allocs/op",
            "extra": "1464424 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 1759,
            "unit": "ns/op\t     296 B/op\t      13 allocs/op",
            "extra": "655885 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 20.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58098193 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 4478,
            "unit": "ns/op\t    1489 B/op\t      17 allocs/op",
            "extra": "257110 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 6767,
            "unit": "ns/op\t    2038 B/op\t      35 allocs/op",
            "extra": "174271 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 60896,
            "unit": "ns/op\t   19975 B/op\t     480 allocs/op",
            "extra": "19722 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 676179,
            "unit": "ns/op\t  191345 B/op\t    4828 allocs/op",
            "extra": "1785 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 8304445,
            "unit": "ns/op\t 1896413 B/op\t   48087 allocs/op",
            "extra": "135 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 74745,
            "unit": "ns/op\t   20072 B/op\t     615 allocs/op",
            "extra": "16030 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 728725,
            "unit": "ns/op\t  194172 B/op\t    6022 allocs/op",
            "extra": "1497 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 8569358,
            "unit": "ns/op\t 1947763 B/op\t   60912 allocs/op",
            "extra": "123 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 5609,
            "unit": "ns/op\t    1821 B/op\t      27 allocs/op",
            "extra": "203026 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 6272,
            "unit": "ns/op\t    1805 B/op\t      25 allocs/op",
            "extra": "188721 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 3520,
            "unit": "ns/op\t    1513 B/op\t      17 allocs/op",
            "extra": "333435 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 4721486,
            "unit": "ns/op\t 1302878 B/op\t   40088 allocs/op",
            "extra": "253 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 7478,
            "unit": "ns/op\t    3021 B/op\t      37 allocs/op",
            "extra": "156822 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 8678,
            "unit": "ns/op\t    2444 B/op\t      49 allocs/op",
            "extra": "136588 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 5150,
            "unit": "ns/op\t    1740 B/op\t      22 allocs/op",
            "extra": "230193 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 28692,
            "unit": "ns/op\t   16618 B/op\t     164 allocs/op",
            "extra": "42075 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 100819,
            "unit": "ns/op\t   11953 B/op\t     797 allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 1027896,
            "unit": "ns/op\t  125908 B/op\t    8741 allocs/op",
            "extra": "1190 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 12831388,
            "unit": "ns/op\t 1349922 B/op\t   89741 allocs/op",
            "extra": "78 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 7383395952,
            "unit": "ns/op\t5285296816 B/op\t60930394 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 210322946,
            "unit": "ns/op\t139530908 B/op\t 1670235 allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 7777884654,
            "unit": "ns/op\t5422402184 B/op\t62540810 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 12843,
            "unit": "ns/op\t    7536 B/op\t     111 allocs/op",
            "extra": "90015 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 690.7,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1750387 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 12850,
            "unit": "ns/op\t    7536 B/op\t     111 allocs/op",
            "extra": "88809 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "YunShuEmail@foxmail.com",
            "name": "YunShu",
            "username": "Selflocking"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "12c6c5f67f6b0ed2894e963dc690d95c31e93aaf",
          "message": "docs: replace gitter links with discord (#1271)",
          "timestamp": "2023-07-08T23:17:39+08:00",
          "tree_id": "0fb04e043421294ba6bb55e4875c65fb2f2fb5f5",
          "url": "https://github.com/newwan/casbin/commit/12c6c5f67f6b0ed2894e963dc690d95c31e93aaf"
        },
        "date": 1688840480820,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 20.91,
            "unit": "ns/op",
            "extra": "57429646 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57429646 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57429646 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 210.7,
            "unit": "ns/op",
            "extra": "5743723 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5743723 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5743723 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 209.5,
            "unit": "ns/op",
            "extra": "5739799 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5739799 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5739799 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 217.9,
            "unit": "ns/op",
            "extra": "5443669 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5443669 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5443669 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 231.2,
            "unit": "ns/op",
            "extra": "5113837 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5113837 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5113837 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 213.4,
            "unit": "ns/op",
            "extra": "5194258 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "5194258 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "5194258 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 208.6,
            "unit": "ns/op",
            "extra": "5708196 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5708196 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5708196 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 240.6,
            "unit": "ns/op",
            "extra": "5189809 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "5189809 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5189809 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 3736,
            "unit": "ns/op",
            "extra": "318152 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1520,
            "unit": "B/op",
            "extra": "318152 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "318152 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 236,
            "unit": "ns/op",
            "extra": "5048167 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "5048167 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5048167 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 208.3,
            "unit": "ns/op",
            "extra": "5771934 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5771934 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5771934 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 208.7,
            "unit": "ns/op",
            "extra": "5698890 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5698890 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5698890 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 400.3,
            "unit": "ns/op",
            "extra": "2984330 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2984330 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2984330 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 210.3,
            "unit": "ns/op",
            "extra": "5107876 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "5107876 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5107876 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 649.9,
            "unit": "ns/op",
            "extra": "1804260 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1804260 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1804260 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 732.4,
            "unit": "ns/op",
            "extra": "1738962 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1738962 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1738962 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 743.3,
            "unit": "ns/op",
            "extra": "1560414 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1560414 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1560414 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 680.6,
            "unit": "ns/op",
            "extra": "1769876 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1769876 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1769876 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 855.4,
            "unit": "ns/op",
            "extra": "1357866 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 179,
            "unit": "B/op",
            "extra": "1357866 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1357866 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1582,
            "unit": "ns/op",
            "extra": "939698 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 460,
            "unit": "B/op",
            "extra": "939698 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "939698 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 679.3,
            "unit": "ns/op",
            "extra": "1760114 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1760114 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1760114 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 774.3,
            "unit": "ns/op",
            "extra": "1405244 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1405244 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1405244 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1751,
            "unit": "ns/op",
            "extra": "697394 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 297,
            "unit": "B/op",
            "extra": "697394 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "697394 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 20.91,
            "unit": "ns/op",
            "extra": "57352827 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57352827 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57352827 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 4809,
            "unit": "ns/op",
            "extra": "246174 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1489,
            "unit": "B/op",
            "extra": "246174 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "246174 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 7249,
            "unit": "ns/op",
            "extra": "163045 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2034,
            "unit": "B/op",
            "extra": "163045 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "163045 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 65411,
            "unit": "ns/op",
            "extra": "18571 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19959,
            "unit": "B/op",
            "extra": "18571 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "18571 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 686117,
            "unit": "ns/op",
            "extra": "1748 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191258,
            "unit": "B/op",
            "extra": "1748 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4827,
            "unit": "allocs/op",
            "extra": "1748 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 7679724,
            "unit": "ns/op",
            "extra": "151 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1896143,
            "unit": "B/op",
            "extra": "151 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48089,
            "unit": "allocs/op",
            "extra": "151 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 78507,
            "unit": "ns/op",
            "extra": "15247 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20029,
            "unit": "B/op",
            "extra": "15247 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "15247 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 751217,
            "unit": "ns/op",
            "extra": "1390 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194157,
            "unit": "B/op",
            "extra": "1390 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6023,
            "unit": "allocs/op",
            "extra": "1390 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 8379433,
            "unit": "ns/op",
            "extra": "129 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1946768,
            "unit": "B/op",
            "extra": "129 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60870,
            "unit": "allocs/op",
            "extra": "129 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 6008,
            "unit": "ns/op",
            "extra": "180222 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1819,
            "unit": "B/op",
            "extra": "180222 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "180222 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 6704,
            "unit": "ns/op",
            "extra": "177012 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1803,
            "unit": "B/op",
            "extra": "177012 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "177012 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 3687,
            "unit": "ns/op",
            "extra": "305949 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1512,
            "unit": "B/op",
            "extra": "305949 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "305949 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5050318,
            "unit": "ns/op",
            "extra": "236 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1303117,
            "unit": "B/op",
            "extra": "236 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "236 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 7671,
            "unit": "ns/op",
            "extra": "152636 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3020,
            "unit": "B/op",
            "extra": "152636 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "152636 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 9077,
            "unit": "ns/op",
            "extra": "131295 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2442,
            "unit": "B/op",
            "extra": "131295 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "131295 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 5470,
            "unit": "ns/op",
            "extra": "217380 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1737,
            "unit": "B/op",
            "extra": "217380 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "217380 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 28482,
            "unit": "ns/op",
            "extra": "41456 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16616,
            "unit": "B/op",
            "extra": "41456 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "41456 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 102128,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11952,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1071774,
            "unit": "ns/op",
            "extra": "1088 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125908,
            "unit": "B/op",
            "extra": "1088 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1088 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 12053922,
            "unit": "ns/op",
            "extra": "84 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349917,
            "unit": "B/op",
            "extra": "84 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "84 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 7458585025,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5285037920,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60929801,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 202251483,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139521803,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1670219,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 7678103410,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5422019816,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62540102,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 13488,
            "unit": "ns/op",
            "extra": "92727 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7539,
            "unit": "B/op",
            "extra": "92727 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "92727 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 699.8,
            "unit": "ns/op",
            "extra": "1717039 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1717039 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1717039 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 13157,
            "unit": "ns/op",
            "extra": "86180 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7536,
            "unit": "B/op",
            "extra": "86180 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "86180 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "committer": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "distinct": true,
          "id": "c907b9054e5a179fe7d1f64b3003837de3969bcc",
          "message": "Improve README table",
          "timestamp": "2023-09-25T19:23:35+08:00",
          "tree_id": "aa1f53a4ef1150c4d74263b08901cdfd8753e3da",
          "url": "https://github.com/newwan/casbin/commit/c907b9054e5a179fe7d1f64b3003837de3969bcc"
        },
        "date": 1698273970180,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 23.5,
            "unit": "ns/op",
            "extra": "50628930 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "50628930 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50628930 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 273,
            "unit": "ns/op",
            "extra": "4325151 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4325151 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4325151 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 259,
            "unit": "ns/op",
            "extra": "4695296 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4695296 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4695296 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 268.7,
            "unit": "ns/op",
            "extra": "4306255 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4306255 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4306255 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 271.5,
            "unit": "ns/op",
            "extra": "4557333 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4557333 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4557333 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 262.3,
            "unit": "ns/op",
            "extra": "4174077 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 97,
            "unit": "B/op",
            "extra": "4174077 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4174077 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 266.6,
            "unit": "ns/op",
            "extra": "4437904 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4437904 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4437904 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 317.6,
            "unit": "ns/op",
            "extra": "3971493 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "3971493 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3971493 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 3831,
            "unit": "ns/op",
            "extra": "271280 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1519,
            "unit": "B/op",
            "extra": "271280 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "271280 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 293.9,
            "unit": "ns/op",
            "extra": "4086264 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4086264 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4086264 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 246.3,
            "unit": "ns/op",
            "extra": "4829026 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4829026 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4829026 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 257.4,
            "unit": "ns/op",
            "extra": "4578243 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4578243 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4578243 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 503.5,
            "unit": "ns/op",
            "extra": "2431598 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2431598 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2431598 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 245.8,
            "unit": "ns/op",
            "extra": "4183448 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 106,
            "unit": "B/op",
            "extra": "4183448 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4183448 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 822.3,
            "unit": "ns/op",
            "extra": "1508424 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1508424 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1508424 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 786,
            "unit": "ns/op",
            "extra": "1527145 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1527145 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1527145 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 824.8,
            "unit": "ns/op",
            "extra": "1493976 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1493976 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1493976 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 801.2,
            "unit": "ns/op",
            "extra": "1428112 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1428112 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1428112 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1039,
            "unit": "ns/op",
            "extra": "1155518 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 182,
            "unit": "B/op",
            "extra": "1155518 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1155518 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1671,
            "unit": "ns/op",
            "extra": "797706 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 430,
            "unit": "B/op",
            "extra": "797706 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "797706 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 827,
            "unit": "ns/op",
            "extra": "1495729 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1495729 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1495729 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 933.7,
            "unit": "ns/op",
            "extra": "1164955 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 179,
            "unit": "B/op",
            "extra": "1164955 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1164955 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1893,
            "unit": "ns/op",
            "extra": "624902 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 305,
            "unit": "B/op",
            "extra": "624902 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "624902 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 20.51,
            "unit": "ns/op",
            "extra": "59237728 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "59237728 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "59237728 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 5031,
            "unit": "ns/op",
            "extra": "227509 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1489,
            "unit": "B/op",
            "extra": "227509 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "227509 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 7879,
            "unit": "ns/op",
            "extra": "144355 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2035,
            "unit": "B/op",
            "extra": "144355 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "144355 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 67378,
            "unit": "ns/op",
            "extra": "16885 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19971,
            "unit": "B/op",
            "extra": "16885 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "16885 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 783207,
            "unit": "ns/op",
            "extra": "1474 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191288,
            "unit": "B/op",
            "extra": "1474 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4826,
            "unit": "allocs/op",
            "extra": "1474 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 8926538,
            "unit": "ns/op",
            "extra": "118 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1896026,
            "unit": "B/op",
            "extra": "118 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48075,
            "unit": "allocs/op",
            "extra": "118 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 90309,
            "unit": "ns/op",
            "extra": "14126 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20083,
            "unit": "B/op",
            "extra": "14126 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "14126 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 918949,
            "unit": "ns/op",
            "extra": "1195 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194163,
            "unit": "B/op",
            "extra": "1195 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6024,
            "unit": "allocs/op",
            "extra": "1195 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 10102217,
            "unit": "ns/op",
            "extra": "102 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1952436,
            "unit": "B/op",
            "extra": "102 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 61097,
            "unit": "allocs/op",
            "extra": "102 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 6561,
            "unit": "ns/op",
            "extra": "176361 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1820,
            "unit": "B/op",
            "extra": "176361 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "176361 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 7156,
            "unit": "ns/op",
            "extra": "169816 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1803,
            "unit": "B/op",
            "extra": "169816 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "169816 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 4025,
            "unit": "ns/op",
            "extra": "332250 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1512,
            "unit": "B/op",
            "extra": "332250 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "332250 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5096831,
            "unit": "ns/op",
            "extra": "242 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1302807,
            "unit": "B/op",
            "extra": "242 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "242 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 9037,
            "unit": "ns/op",
            "extra": "120600 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3023,
            "unit": "B/op",
            "extra": "120600 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "120600 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 9955,
            "unit": "ns/op",
            "extra": "125474 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2442,
            "unit": "B/op",
            "extra": "125474 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "125474 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 5571,
            "unit": "ns/op",
            "extra": "208993 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1738,
            "unit": "B/op",
            "extra": "208993 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "208993 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 33258,
            "unit": "ns/op",
            "extra": "36650 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16612,
            "unit": "B/op",
            "extra": "36650 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "36650 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 108537,
            "unit": "ns/op",
            "extra": "9765 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "9765 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "9765 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1089300,
            "unit": "ns/op",
            "extra": "1178 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125908,
            "unit": "B/op",
            "extra": "1178 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1178 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 14028380,
            "unit": "ns/op",
            "extra": "72 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349927,
            "unit": "B/op",
            "extra": "72 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "72 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 8350567831,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5285712072,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60936357,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 231263268,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139813867,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676186,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 8920840442,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5422597648,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62546741,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 16975,
            "unit": "ns/op",
            "extra": "74258 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7537,
            "unit": "B/op",
            "extra": "74258 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "74258 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 773.5,
            "unit": "ns/op",
            "extra": "1382359 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1382359 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1382359 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 15029,
            "unit": "ns/op",
            "extra": "85174 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7538,
            "unit": "B/op",
            "extra": "85174 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "85174 times\n2 procs"
          }
        ]
      }
    ]
  }
}