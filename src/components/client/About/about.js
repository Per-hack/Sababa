import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

function About() {
  return (
    <>
      <div className="row">
        <div className="col-12 d-flex flex-column align-items-center justify-content-center ">
          <img
            className=""
            style={{ height: "300px", width: "350px" }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAFeCAYAAADNK3caAAAgAElEQVR4Xu2dCdhu1fiHV53UyUkzpTSYUjlJSGlQGkQZ65SQqZCUCp1owDFlyJShIudEKVOmkDKFkyHKlJTIEMqQFOEk9L9++/rv91rfOu/3rb33u/daz7e6n+v6rjjvsNa6n/X+9hqeZ60V7rjjjjscBgEIQAACyQisgPAmY01BEIAABCoCCC8dAQIQgEBiAghvYuAUBwEIQADhpQ9AAAIQSEwA4U0MnOIgAAEIILz0AQhAAAKJCSC8iYFTHAQgAAGElz4AAQhAIDEBhDcxcIqDAAQggPDSByAAAQgkJoDwJgZOcRCAAAQQXvoABCAAgcQEEN7EwCkOAhCAAMJLH4AABCCQmADCmxg4xUEAAhBAeOkDEIAABBITQHgTA6c4CEAAAggvfQACEIBAYgIIb2LgFAcBCEAA4aUPQAACEEhMAOFNDJziIAABCCC89AEIQAACiQkgvImBUxwEIAABhJc+AAEIQCAxAYQ3MXCKgwAEIIDw0gcgAAEIJCaA8CYGTnEQgAAEEF76AAQgAIHEBBDexMApDgIQgADCSx+AAAQgkJgAwpsYOMVBAAIQQHjpAxCAAAQSE0B4EwOnOAhAAAIIL30AAhCAQGICCG9i4BQHAQhAAOGlD0AAAhBITADhTQyc4iAAAQggvPQBCEAAAokJILyJgVMcBCAAAYSXPgABCEAgMQGENzFwioMABCCA8NIHIAABCCQmgPAmBk5xEIAABBBe+gAEIACBxAQQ3sTAKQ4CEIAAwksfgAAEIJCYAMKbGDjFQQACEEB46QMQgAAEEhNAeBMDpzgIQAACCC99AAIQgEBiAghvYuAUBwEIQADhpQ9AAAIQSEwA4U0MnOIgAAEIILz0AQhAAAKJCSC8iYFTHAQgAAGElz4AAQhAIDEBhDcxcIqDAAQggPDSByAAAQgkJoDwJgZOcRCAAAQQXvoABCAAgcQEEN7EwCkOAhCAAMJLH4AABCCQmADCmxg4xUEAAhBAeOkDEIAABBITQHgTA6c4CEAAAggvfQACEIBAYgIIb2LgFAcBCEAA4aUPQAACEEhMAOFNDJziIAABCCC89AEIQAACiQkgvImBUxwEIAABhJc+AAEIQCAxAYQ3MXCKgwAEIIDw0gcgAAEIJCaA8CYGTnEQgAAEEF76AAQgAIHEBBDexMApDgIQgADCSx+AAAQgkJgAwpsYOMVBAAIQQHjpAxCAAAQSE0B4EwOnOAhAAAIIL30AAhCAQGICCG9i4BQHAQhAAOGlD0AAAhBITADhTQyc4iAAAQggvPQBCEAAAokJILyJgVMcBCAAAYSXPgABCEAgMQGENzFwioMABCCA8NIHIAABCCQmgPAmBk5xEIAABBBe+gAEIACBxAQQ3sTAKQ4CEIAAwksfgAAEIJCYAMKbGDjFQQACEEB46QMQgAAEEhNAeBMDpzgIQAACCC99AAIQgEBiAghvYuAUBwEIQADhpQ9AAAIQSEwA4U0MnOIgAAEIILz0AQhAAAKJCSC8iYFTHAQgAAGElz4AAQhAIDEBhDcxcIqDAAQggPDSByAAAQgkJoDwJgZOcRCAAAQQXvoABCAAgcQEEN7EwCkOAhCAAMJLH4AABCCQmADCmxg4xUEAAhBAeOkDEIAABBITQHgTA6c4CEAAAggvfQACEIBAYgIIb2LgFAcBCEAA4aUPQAACEEhMAOFNDJziIAABCCC89AEIQAACiQkgvImBUxwEIAABhJc+AAEIQCAxAYQ3MXCKgwAEIIDw0gcgAAEIJCaA8CYGTnEQgAAEEF76AAQgAIHEBBDexMApDgIQgADCSx+AAAQgkJgAwpsYOMVBAAIQQHjpAxCAAAQSE0B4EwOnOAhAAAIIL30AAhCAQGICSYX3f//7n/vNb37jfvKTn7hf/OIX7u9//7u75ZZbRv/9xz/+4e5617u6ddZZx6255pru7ne/u3vwgx/sHvawh7nVV189MRqKgwAEIDAMgcGF95e//KU799xz3Ve+8hX3ta99rXMrHvSgB7lnPetZ7tnPfrZbe+21O39Prg8ecMAB7v3vf7+pB4j88Za3vKUVkhVXXNHd7W53q9oxb9686r+rrbZa9W+bbLKJu9/97uc23nhjt9JKK7X6Xutv/vKXv+yuvPJKd9RRR5mq6nOf+1z3hz/8oVWd5s6dW/mr/pP/5EcNeOQ//WngU5q98Y1vdDvvvLPbcccdszdtEOH973//6z784Q+7xYsXTyS209E57LDD3KJFi9w97nGP7ACbVEAj/K222sqdffbZ7qCDDmrykSTv+chHPuKe+tSnDlLWlltu6XbbbTe3++67V51dP+rZbE95ylPcZZdd5n7+8587PXys2H3ve1+nwU3fpt/WQx/6ULfnnnu6XXfd1WngM2fOnL6LSfZ9t99+u7vXve7lHv/4x1cDoNzWu/D+7Gc/c4cccoj75je/2apttYj+6U9/avQ5Pa3POeecCqR1O+GEE9xJJ51UdeIvfvGLZqo7pPCGjdQo49BDD3X77bdftZw0m+ymm24aPTguueQSEyOmmt9Qwhv6R7+35zznOe55z3uemz9//mxyX1VX/e722muv6n/XS5o5G9Gr8L73ve91L3jBC6Ztz0Me8hD3mMc8xm233XZuo402qqak4UhIT6bf//737re//W21Hqyn+RlnnOF+97vfjf3eY4891r3pTW/KyXDGsv/zn/+4DTfc0NUPFLVLT14LFgqvHn6ads5kt956q/vXv/5Vrct3Mf2AX/jCF7qXvexlbq211uryFck/s2TJkmowIdNs69RTT01eh+kKDIX3Pve5T7Ruf/7znzv7T1+uGcyJJ57oHv3oR0fLsvKGZz7zmdWMU6Z+rxlMTutNeM8666xqDXbck3LhwoVVx91ggw06tVXi9YlPfMK9+c1vdt///veX+46Xv/zl7g1veEOn7x76QxdffHE15a5Na6ovfelLhy620feHwquptKaXTe22225z//znP93f/va36gGpabhmPPr7xje+MeOPWwL87ne/u1p6sTR1H9f2Rz7ykW7p0qXVS6q3HqJaJ7VgvvBq9nf++ec3rpaWBJctW1aNAG+44YbKf7UPr7jiirG/Nf/LNXt529veVg2gLJs28P0163322cd97nOfy1rlXoRXGw+aRof21re+tRrd9NVJ77jjDvfVr37VveQlL3E//vGPpxSnhXONoqyZNj+01l2b1j61SWPBJhXemdqgH/Xll1/uLrzwwuqhGfqr/qx+BB/96EerjTqLdu2111abTb598pOfdE9+8pNNVHcS4Y014MYbb3Rf+tKXKpH67Gc/O+2DVK/Lj1btQx/6kHvGM54xpXp60Ky//vrZqjyx8GrUIzHxF/g1ZdWPbaeddhqkYRphHXjgge4LX/jClO9vO2IbpHLel2parhFSaBq1b7PNNkMXH/3+IYU3LFwPm9e85jXuYx/72HL12n777asft8UNOM2kjj/++Cl1luhKfC3YkMLrt08j4w9+8IPula985WjZzH9dM95Q3CzwUR20JKIHiG/vete73BFHHJGtihML73ve857lGvCrX/3KbbrppoM2SssPj3vc49xFF100KkcPAInaKqusMmjZTb9cIzk9IEKzsi6dUnhrBj/60Y/ccccdt9xDc7PNNqtmM1oPt2KaYWm0Oy5qQOuk6667bvaqphLeuqFa39eat3wYrvNr2eHFL35xdiZ+Ba677roqzDE07TdpRpbLJhJebYRplOI7QOt2hx9+eJL2aCqkkaO/8WZpyUEPhs9//vPLsdCMQBuIuWNdcwivYEjQXvva17pXvepVU9hoLVwjEytrvt/97nerjeBxdvrpp1dRGrkttfDW7dU6/t57773cQ0l7Ggo/s2Ja7jzmmGPGVkdhng984AOzVHUi4f36178+BfK2227rvvWtbyUVlLAOmtoroDx3yNL1118/4+hNI/Xcu8K5hLfu6ePC2awImuqo0ds73vGOsT9MLY98+9vfzvKj9QvNJbyqg8LstMHmJ0YpYueqq66KRsekAidh/elPfzq2OEVmaACQwyYSXk2ZTz755FG9c4VpPOEJT6gW/2s77bTTZgxrSwFaI/8XvehFo6L0QPBnBloP07pYTsstvGq7fKUNWN9SLFXFuGvvQinrvs9CH15zzTXu/ve/f+yrBn09p/CqYdpvkbj5s86jjz7avf3tbx+03U2+/Ac/+IHTkkJtof/0kPj1r3+dJTFkIuENYwhzrXsp9EWZNbXlBFrXQWFZfuibEkrCVEV12nGbb006VR/vsSC8Or9DU1Z/rV4jTa0X5jQtEWmpqDaN7B7+8IdPiZx59atfXW025bTcwqu2K6lEsb2+ada53nrr5URT+UohqLVpMKQBmt/Xci2NdBZe7XKuuuqqo0blnnopMcMHqmmg6pTDwgeBHgraVNKa4Pve975RlXKnEFsQXsHQerefVGJhDVwB9n4Exqc//enqwCZ/01jJCrlTiC0Ir3yoEE9/lJt7yahOEfYzYfUw0Abu0572tNFvUPkFOVKIOwuvFtc333zzUQMUKvSKV7wih85VZYYiol1XpenmMHF43eteNyq63u1VUsEuu+wy+vfcKcRWhFdAnv70p1eHKdWmH8ijHvWoHO5zf/3rX6ccxKRZiWZzipZRnfw1zdwpxFaE9+qrr3ZbbLHFyF8aAau/5zI/RVh1qJNLxoV45kgh7iy8YcMU46e0vFxWH0RTl6/RiILfU1uYIlyP6JS1p6QCjZj89bCcKcSWhDec2ivGUrGWOezMM890Bx988Khovy4f+MAHqjMLasudQmxFeMUjXF7TBvM973nPHC6stKhOEVYFPv7xj7sFCxZUdZH/5MfacuxNdRbesANq7cRfE0tJW9NAgQ7jCnXmrzpmStNoyB+p6WAOZW/VphAqzQ5qy5lCbEl4w82snLMBP0VYfvKXrW6++eYpZ0zkTiG2JLya2fnp8LlmA2GKsHzoj2rDTNscKcSdhVcHhfjxuto82mGHHVJqnNOPVUsK43ZQNUqRqKVOpghThDV99o9eVGiLHztYr/8mBff/hVkSXlVJm1ff+973qtopoULLWaktTBHWzEkP8BVWWGFUlXBZJGcKsSXhDWfB/igzpR/DFOHnP//5Tgd41TZuVpo6hbiz8IYjXqWEKnMslSnkSBsg9Q/VL1ebIvvvv3+qqozK0VM1PN1Lo/Dw38IpWa4UYmvCq6mgUs1rU6JFagtThBXnqXhP35SqrkiM2nKmEFsSXp3HsfXWW4+45ErLDVOEFeuvWYxvOljLP9UwdV07C6+OatSTpDYJoK7oSWHTLS1o9Hjeeedli60MU4R1W4bWC0ML06xzpRBbE94jjzxyyrpu6nC7cSnCiloID8kZl7GZK5TSkvAqasBf082xwR2mCCtaRsfLhtmQ4UMidQpxZ+HV9EqxjbVppLLvvvsOqrszLS3oHGCtMfkhboNWZsyXhynCSn/dY489lnvnH//4xyknI+UKn7ImvGGmmDKjUp7ZG6YIK+5a65TjTGuZfqxxrvApS8Kr0C0/djfHgCJMEVacteKtx5lG5/6peSlTiDsL76WXXjolTlZn8fo7hX2L3kxLC7pmaNxhNH3XYabvC1OEY2IaZtvlSCG2Jry6l07rgrUpucJfWx3an6HwK+ZaNy6MMx2w4s/wcsWxWxLecBSZY+M4TBHWnoof5ub7Uung/qE+KVOIOwvvuOnWUCOUmZYWtJ77gAc8YOjfZPT7wxRhZc3owJ7pTEsi/jp0jhRia8Lrb65piqhQu1Q2LkX4L3/5y4wXq6rfKW24thwpxJaEN1z71iaXNiJTWZgiHFs+CBN3Uma8dhZewdQar9Z6awt3D/sAHgpa/Z0aieiJlfswnLo+4YaZMtX8NOaQhW5uCA//Tr2maUl4tb66xhprjEICZ5rm99Gvwu8I44j1UBx3drD/OaWj+ofv50ghtiS84dVfulncv31lCL/53xmmCGsvJTwHJKxDmPGaKoV4IuENkxbUqL5Po1dMns4A9U3Tz9x54H59pksRjnW03CnEloRXV+v4O8+pZwBhivBnPvMZp+WgmUwHrNz73vcevWVc6FmsD0z6uiXh1Y3SyjjMMQMYFyKmvZTYTeRapsyRQjyR8ArwUUcd5d75zndO6T+pn3STdt5JPx+mCCuuWCc0xSx3CrEl4Q2ziVKGBM6UIhzzYZhCnDqe3YrwKtbZP6ktdRz2dCnCMf8p3HP11Vef8rYUKcQTC68yeXRYtL/WpVak/OHE4A75+kwpwrFyc6cQWxHeUPjELeWyy0wpwjEfhvHsmtpqipvKrAivogf8s21TL7vMlCIc80WOh/7EwqtGKU5OGyP+SUD6d8Wxah1Wa3elWixFONbuMIVY4TA66SmFWRHeMNtP0Q2KiU5lM6UIx+qQO4XYgvDq4PMweUrLb/Pnz4/h6+X1WIpwrJAcKcS9CK8aprANnQAU3k+lnUL9wMOzaGMwZsvrsRThWDtyphBbEF4dyReGbKU80rNJinDMh2EK8ac+9Sn3pCc9KfaxXl7PLbyamejmGX/G+9jHPtZdcMEFvbSvyZfEUoRj35Ejhbg34VXjNGVUPK9/G0TdaKXoadfRv98+BsT6601ThGPtCCMifvjDH05JvYx9vuvruYVX10SFD+SZAt67tnOmzynkTxlWtY1LEY6VmzOFOKfwKqRUm5J60NSmQ4N0xkbKU8mapAjHfBimEA99d2SvwqvGad3y9a9//XIXGeo1OUUXz+lKnJQZSTHoXV9XsL+mxbVNlyIc+/5cKcS5hFeJEWqzUoR908hJm1N3uctdYsh6eV0hbDpT2h+tjUsRjhWWM4U4l/BqZquR/ne+850peJpEg8R4tnldsd4bb7zx6CPTpQjHvjNM/lBfVCbjUNa78NYVVVykTuUKj2qsX9fapgRYtxTPVgtThLVWpJCatpYrhTiH8KqtOvV/3O3LOkw7ZTKMzhfR3kRtk8QO57qBIYfwhiFYNb8h4vhjv6XwKErpyqJFi2IfG/t6mPU2ZArxYMKrlmnR+5RTThk7+q1brpx3xbPmvjSwrafapgjHvj9HCnFK4dWoUAH2xx9//HIPY8Va6uyP1PsAoVgqGUhr9l3ssssuq9Y6a0uVQpxSeLUfIWb+FVt1e3OdlRKKpTb6/Jtx2vhSYaD+xvaQKcSDCm/daI1ydATbTDePakFe5/sqk2TOnDlteGV5b7g8oDUiHSnY1cJlixQJBKmEV2ugimsOQw7FSn7X7SW60TeldUkRjtUvRwpxCuFV6rQO7w/j9Wseuc5KUXao7sGrbdLlgZQpxEmEtwajg260/rt48eJp+7DWaHRwhTbpLC9DtE0Rjv1oc6QQDy28M42QxEN+1kEq4ZF9MVZ9vN4lRThWrgYXegDXliKWdUjhnWmWUrcx9fKQ74MuKcIxH6ZKIU4qvHWjdXapAs/1BPXvHwuhKMxIUxgddmHJuqYIx9oQnn0x9C3EQwrvuBCdsP3abJVQaa0/9TX3XVKEY/7LkUI8pPCGZ26Pa/+uu+5azfRS3+jdNUU45sNzzjnHHXTQQaO3DXULcRbhrVsleJqG6vR3nV07ncmpSk3WSf+pr/IZV6euKcIxp6dOIR5SeNVW+VcJJoqz1HLCdCbR1Y9XnXzu3LkxTBO/PkmKcKzw1CnEQwqv2qq9DCWzKN5aM5jpTDH8ull7poOhYuzavN41RThWRqoU4qzC60PQlEXnn860DqxNGMV5agMklwArXE43BvtZelob0r9NauNSiDUj2HDDDSf96rGfH1p4/ULVoRVqdNZZZ037kNUykzbZ/E2qIRo+SYpwrD6pU4iHFl6/vTp2UX3mtNNOmzZaSSnT2lBfaaWVYqgmen2SFOFYwSlSiM0Ibw1DP1BdEKkwkXGbMXqffqAaIenw86EdHDpp0hThmNNTphCnFF6/3doU0axhXKKNRr86ZGlI8Z0kRTjmv9QpxCmFt267TgvUCPiEE04YK8DaGF6yZMlgv01ly/nHEKjP6Nqhvo6ITZFCbE54a+cquF2X1EmAx/1A9T6dgKQzURWKleqmgjBFuO8d3ZQpxLmEt/axbjGRAIfLTEOKrwL/JVa1DXGUY8oU4hzCW7O79dZbq0QYbZiH8fraHJc4DzEwClOEtQ+kUXhfliKF2Kzw+hB1C6/Wj/zURP91rf1qihce79aXI+rv6StFOFavVCnEuYW35nD++ee7Jz7xiVOwSHx1tmvfF6iGKcLqVxq59WkpU4hzCm/NTKN8nWmrdvs2lPiGKcLaG9l55537dGG16evfQtx3CvGsEN6aqNL69HQddzOARr+6Imi6+5X68EpfKcKxuoQxwrFrhGLfN93rVoRX9Qund/o3ia/Wz/uKeBiXIqxzZP0RcFeW/uf+/e9/u3XXXXfKKPDGG28cJDzSgvCq7cuWLXMLFixYLiNRM9KFCxf2gbX6jr5ShGMVGjqFeFYJbw1La4RaXPdvCK1fG/K2475ShGNOD6/Jjl2cGfu+2SC8qqPWdsNbmZseKt+EQZ8pwrHywqw4Ze0pXLBvsyK8tfjq7BJ/abDv9dc+U4Rjvgiz4q688srljr+Mfcd0r89K4a2drI0oPVFDmyRfezpQN9xww5TIhaHEsC4/TCGe7qr4ro7X5yyNeOt26OoohSbVJs4677mPMLM+U4Rj3FOlEFsSXjFRRqBie/3Dc0499VR32GGHxZA1er3PFOFYgWEKsfYjlMHXh81a4a0brygDBcOHh7DrAHbF/vZlfacIx+oVLmtovUzr2H2aReFV+3baaafqlLLatEmjGN9JbNz0P3aL8CTl6bNhCnGXk89idbAmvKpvuGykKCRtak566lzfKcIxtkOmEM964RU8BcRrfcm/aE//3ufFm32nCMecniKF2KrwhptTijzQGa+T7JAPkSIc82GYQqzRkkZNfZpF4VX7dOqblnZq6yMLM9zwanKL8KSswxRiDfR22WWXSb/WFSG8oiCh0hTVF19NU3U+xKTxfeFtysrO0dN3aBs6hdiq8GoTTIef+Gv44j1JVpSOKFV7a0txbmyKFGKrwiu+/i0c+++//9hN8aa/oaFShGPlD5VCXIzwCqDiCrfeeusp1w/1McoIL/LrexljOucrjlnrZbXtueeeTqmSfZlV4VX7lOGm5ZXatGGjzc0uNmSKcKw+Q6cQWxXeMAtz0sFKuHyh8ENFMQ1tYQpxX5uFRQmvnLB06VKnzKTaNOpVvnnXoyaHTBGOdZpxZfeZQmxZeC+//PIpMbw6z+OII46IIRv7epjGq0N5pjvisFMBM3xo6BRiq8IrJOEGsWYyXU23u/jnfZx33nluv/326/p1rT4Xlt3HDerFCa+IhmFf2qjZYYcdWsGu3xyOOlNf5BeOtvu8hdiy8Cru1T+jV0dIKpSoi4WjzpSXaY4bbWsjuI8oDbGwLLxhFIlOJVR8c1sblyKsM75XXXXVtl/V6f1DpBAXKbx6GmpNqTad+aqbLrrY0CnCsToNmUJsWXjFxU8D7zq1TJEiHPNhuL7c5y3EloVX2V6aXdSmWUyXI16HThGO+W/c+rJi7ddbb73YR6d9vUjhDRMQ9OTVSLGtjUsR1jryvHnz2n7VRO8fKoXYuvBqvb7eYNtyyy2dAtjbWooU4VidwogKpbjrFLY+zLLwal1eyw21qc1qe1tLkSIcq1PfKcRFCq9usfXXdJVHrt3JtpYqRThWr6FSiK0Lrx/Pq1hQpYu2sVQpwrE6DZlCbFl4wym6Rq46QKiNpUoRjtWp7xTiIoU3nKZ2Fd5UKcIxpw+VQmxdeDfaaKPRDSWaomqq2sZSpgjH6jVUCrFl4Q2XCC644ILqjr02ljJFOFavPlOIOwuvRhPhyDJW8VSv67xQP3ZXu+HaFW9jqVOEY3UbIoXYsvBqXc3PdOqyqZkyRTjmv6FSiC0Lb7jMozTi7bbbLoZqyuspU4RjFeszhbi18GqXVk8yxbJqvUYbV9YsHCEqMkAXD7axcHp/3HHHuZNOOqnNV/T63iFSiC0Lb5iu2TZletz0/qabbnJrrbVWr35p82VDpBBbFl7dRuGfk9s2ZTp1inDMlwrl1CysNi1/KUmmS6hqa+HVmbf1occq+Lrrrkt2CHkMTP260ks333zz0du7nHAVbmhpjWerrbZqWoXe3zdECrFl4Q3ThtseL5gjRTjm9CFSiC0Lb/gb0gE6K6+8cgzT6PVwQ6vPw3YaVyJ4Y18pxK2FNyxYh5Rvs802XdsxyOfCdEVlQek6kqaWK0U4Vr8whbjLZoVfhmXh3XfffaccfN92mhqGcOmwdf/UsxjrIV5X+rrOnaitj9svrAqv7mfzQ8faLhWNC+FS/LMf2z2Ej2LfGaYQ6yZ03RXZ1loL7+LFi6vLJmtbtGiR0zGMluzYY491J5988qhKbQPmc6UIxxiGyRx77bWXu/DCC2Mfm/Z1q8IbLjOoAVo6aHq6Vc4U4Zgz+k4htiq8it9VHG9tbRN/cqUIx/zXVwpxa+FVxsj6668/qp9yl7URlTq2dSZA4RRHm21NM4VypgjHnN53CrFV4dUtIyeeeOIIx8EHH+z0wG9qOVOEY3UM69Zl49cvw6Lwjrsive1NHzlThGM+7COFuLXwqlJhQHOqQ2NiQPS60hJ1PkNtuotJdzI1tdwpwrF6hqNxhdsonbaLWRTecH1e7Wp78n/OFOGYH/pOIbYovDr0/PTTTx+haBvOmTtFOObDcDSuJSwtZbWxTsKroxd33333UTl9Hb/YpuLTvTe8Hr1tREO4jtr3LcKTtlEiNH/+/NHXTHLqkzXhveWWW6pzXK+55ppR+9qmCltIEY75OFx/1ilb4WWfse+oX7cmvOFSpOrZdh8oXEft+xbhpmyne18fKcSdhFcVCkcVFuAoXGidddaZwuuKK66YIlQzQbeSIhzrGH2lEFsSXsWEa0NNG6O+tZ2ihpEDQ9wiHPNP7PU+U5jxwnYAAAwbSURBVIgtCa82QB/xiEdMaX6XpZRwA3+IW4RjPoq9PmkKcWfhveSSS5a7Uvncc891eprnMk25texR2z777FPdQtHUwljZtmuLTcuZ9H19pRBbEV7FR2rD9qKLLpqCpm1/spIiHPNvnynEFoRX3LV2rd+LbzpfQ4kjbU4Rs5IiHPPhpDHGnYVXFQsDpPVvuZ5Op5xyijv66KOn8Gp7TUeYHaZbb3fbbbeYD5K/3lcKsQXh1bRSa4J1bHgNs8tIKcwO23HHHZ0GCBatrxTi3MKrjfVDDz10ys3C4q1N90svvdRtscUWrfCH2WEWo6bqBk2SQjyR8C5btsypc2sNx7czzzzTaecvlekyRMXT+dY21GpcivAkB6gP3fbwHIkutxDnEt7bb7+9+qEqjVsPx9A0c1H4kX8sZBOeoZj1cUlmk3K7vCc8R2L77bd3Cntsa7mE99prr60iTRQyFj40tedz8cUXd7oKPRSzq6++uro01KKF50i0uYV4IuEVDAWF6/i+EL6EVxtdm2666WDMtJFy5JFHOq2Z+aaMOgVwtzl02VqKcAxaHynEKYVXa7hKTNFGkliHt0LX7e16VZPFFOGZfDhuWaRtSq2+P6XwKiJDD0oJbvibq9uqpBBdT6V6tbVJp+9ty5v0/ZOkEE8svKq8QoD23nvvKXed1Y1SILXW7ya5qNAHpA6rU6q0/qdpyTjTlFMbUG3MWopwrO7jUoj18FtttdViHx29PpTwSmS1HKI89quuuqq6gFQj3PDh7FdUWU4KQdp2220b199/o8UU4VhDwkNkujx0hhJe9S/5TwMrLRkoUce/NXhc23QeysKFC1ut6frfYzFFOObDMLS26fJmL8KrymkEo5AY7WyOM41CFc+n+9A0ddBIuMl13QrdkPMVRqVRrNJkNdIdZ5riaCTo37kWA6fXm6QIKzrijDPOaPJ1yd4TnrjWNoU4FF7FPOt23zamH6gSVCSqigqR4OrWjDam6arWCZv0h+m+t0mKsCIelBVnxRQ2528odkkh9oVX7fJvfGjSTiXlyG864F++VAytRt7TzUjGfaf2QXSOwiRLAk1ShFU/ibMl0wPf16OmKcS9Ca9gaM1X08hjjjmmERuNgnV9hkZp+tPup+AqnlM/ZIWH+Vd8z/SlCmJesmRJq+WF+vuapAiHI6pGDUz8prbr2qHwpqyuRF7LUTrhbtITw5qmCIezmpTtbVpW2/sBQ+FtWs6k79Pm2SGHHOIOPPDAKva67Xp8WH6TFOHQz5O2YYjPN72FuFfhrRuitGLFT/q52kM0Ut+p688PP/zw6sbRLs5vmiI8G4RXPDSi22CDDRrhTim86pASPi1JHXDAAW6TTTZpVMcmb2qaIjwbhLdtNEdK4d1ss82qS2Plvz322KPx2RlNfNgkRXg2CK/a2uQW4kGEtwatKYziaM8+++xpF+ObOCV8j6ZkCxYsqOIGJ5ne6HvDBfLpTlHSLq3F0LKQjdZSFfHQxBQupx/QpCZR1alRmrWsscYabs0116wSWRRKpKM0tVOtc0y7PBib1C0Ma5zuJDMtQS1durTJV2Z7T9tMRP96pEkqrWU6+W3ttdeufKjjX+UzbZzLf/Klf7nAJGWN+6z/AFF/GneLsJZD9Jp10zq3jjGdyQYVXr9g7Tpro0XrtAo/0zm+usJbYVw6X8HfeFEnUESCpqDqAFqO0GhFnUA/ZHUQDAIQgMBsJZBMeGcrIOoNAQhAoG8CCG/fRPk+CEAAAhECCC9dBAIQgEBiAghvYuAUBwEIQADhpQ9AAAIQSEwA4U0MnOIgAAEIILz0AQhAAAKJCSC8iYFTHAQgAAGEdxb1AZ3Mdtttt43+dDaG///9/62EFf3/cf+d6bXwMzo7V2nVff7p9LLZZCuuuKKbM2dOr3+6qn6VVVYZ/a288spT/r9e6/PfJjmAaDb5arbUFeHt0VP1KU9KbezyJ9EbJ6b1v0kwMQh0IaAHRxMhrw+s6vLfefPmdananfIzd1rh1e0S9Z8ET6ZRnY441J/ETv9tI6YakWIQuLMS0FkcTQVbDwHfJNr60+d1JIAOeqr/SuSJ8F5/vbv55purEapEVn++aZTZdPSK8Jb4E6FNTQm0EV6JrI6BnTt3bvVf/WlULtMyC8LblDrvazU6HifmLDXQiYYiwFLDUGS7fe+ddsTbDVfeT7G5loc/m2t5uJdcKsJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZAMJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZAMJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZAMJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZAMJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZAMJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZAMJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZAMJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZAMJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZAMJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZAMJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZAMJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZAMJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZAMJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZAMJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZAMJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZAMJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZAMJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZAMJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZAMJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZAMJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZAMJbsndpGwQgYJIAwmvSLVQKAhAomQDCW7J3aRsEIGCSAMJr0i1UCgIQKJkAwluyd2kbBCBgkgDCa9ItVAoCECiZwP8BUUKRixhtsbsAAAAASUVORK5CYII="
          />

          {/* about us */}

          <div className="w-75 text-center  ">
            <h1> Our Mission</h1>
            <p>
              {" "}
              To create an interactive social marketplace that you can rely on.{" "}
            </p>
            <h2>About Sababa</h2>
            <p>
              Sababa is a platform created to allow an at home user to be able
              to order groceries, or buy any form of produce in the comfort of
              their home or office or anywhere they are. We are linking buyers
              and sellers, to supermarkets, farmers markets, resturants, fast
              food outlets, fashion and clothing stores etc, where they can buy
              fish, eggs, vegetables, clothes among others.
            </p>
          </div>
        </div>
      </div>

      <div className="main-div">
        <div className="text-content">
          <h1>Customers</h1>
          <p>
            With your favourite restaurants, supermarkets and many more at your
            fingertips, Sababa satisfies your cravings and connects you with
            possibilities — more time and energy for yourself and those you
            love.
            <br />
            <button className="btn btn-danger" type="button">
              Order Now
            </button>
          </p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/1833399/pexels-photo-1833399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        </div>
        <div className="text-content2">
          <h1>You’ve got stuff to do? We’ve got options.</h1>
          <p>
            From your favourite vendors, corner stores, farmers market, known
            Outlets and Supermarkets. Get it delivered right to your door.
            <br />
            <button className="btn btn-danger" type="button">
              Order Now
            </button>
          </p>
        </div>
        <div>
          <img
            src='https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image'
            alt=""
          />
        </div>
        <div className="text-content2">
          <h1>You’ve got stuff to do? We’ve got options.</h1>
          <p>
            From your favourite vendors, corner stores, farmers market, known
            Outlets and Supermarkets. Get it delivered right to your door.
            <br />
            <button className="btn btn-danger" type="button">
              Order Now
            </button>
          </p>
        </div>
        <div>
          <img
            src='https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image'
            alt=""
          />
        </div>
        {/* <div>
<div className="aboutus">
      
<div className='main-div'>
  <div className='text-content'>
    <h1>Customers</h1>
    <p>With your favourite restaurants, supermarkets and many more at your fingertips, 
      Sababa satisfies your cravings and connects you with possibilities — more time and energy
       for yourself and those you love.

By constantly innovating and expanding, we offer the best choice and convenience. 
Our aim is to bring great service direct to customers as fast as possible, in less than 30 minutes.

<br/>
    <button className="btn btn-danger" type="button">Start an Order Now</button>
</p>
  </div>
  </div>
  <div>
  <img src="https://images.pexels.com/photos/1833399/pexels-photo-1833399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=''/>
  </div>
  <div className='text-content2'>
    <h1>Riders</h1>
    <p>Delivering with Sababa, you get flexibility and financial stability. 
Ride for a living or for a goal, all on your schedule and on your own terms.


Sababa is proud to offer well-paid, flexible work and our riders are at the heart of all that we do. 
Their hard work powers our growth, and without them we would be unable to bring our customers the best 
service on demand while helping great local businesses to grow.

<br/>
    <button className="btn btn-danger" type="button">Ride Now</button>
</p>
<div>
  <img src="https://images.pexels.com/photos/1915149/pexels-photo-1915149.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=''/>
  </div>
  <div className='text-content2'>
    <h1>Partners </h1>
    <p> 
More business, less effort.
 Profit on incremental orders and reach new customers
We give options, you call the shots
    <br/>
    <button className="btn btn-danger" type="button">Join Us</button>
</p>
  </div>
  <div>
  <img src="https://images.pexels.com/photos/696205/pexels-photo-696205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=''/>
</div> */}
      </div>
    </>
  );
}

export default About;
